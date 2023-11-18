import HabitTemplate from '@/src/components/habit/HabitTemplate';
import ApiService from '@/src/lib/service';
import { getCurrDate } from '@/src/lib/utils/dateUtils';
import { id } from '@/src/lib/utils/storage';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const API = new ApiService();

export const getServerSideProps = (context: any) => {
  const habitId = context?.query.id;

  return {
    props: {
      habitId,
    },
  };
};

const Habit = ({ habitId }: any) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useQuery(
    ['habit', { id: habitId }],
    () => API.get(`/habits/${habitId}`),
    {
      onError: err => {
        console.error(err);
        router.push(`/user/${id}`);
      },
    },
  );
  const currDate = getCurrDate(data?.start_date, true) as number;
  const currComplete = data?.daily_status?.map((date: boolean, idx: number) =>
    idx === currDate ? true : date,
  );

  const { mutate: handleComplete } = useMutation(
    () => API.patch(`/habits/${habitId}`, { daily_status: currComplete }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['habit', { id: habitId }]);
      },
    },
  );

  const { mutate: handleDelete } = useMutation(() => API.delete(`/habits/${habitId}`), {
    onSuccess: () => {
      router.push(`/user/${data?.userId}`);
      queryClient.invalidateQueries();
    },
  });

  useEffect(() => {
    if (data?.userId !== undefined && id !== data?.userId) router.push(`/user/${id}`);
  }, []);

  console.log(id, data?.userId);

  if (isError) return <div>에러가 발생했습니다. 다시 시도해 주세요.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <HabitTemplate habit={data} handleComplete={handleComplete} handleDelete={handleDelete} />
    </>
  );
};

export default Habit;
