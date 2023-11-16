import HabitTemplate from '@/src/components/habit/HabitTemplate';
import ApiService from '@/src/lib/service';
import { getCurrDate } from '@/src/lib/utils/dateUtils';
import { useRouter } from 'next/router';
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

  const { isLoading, data } = useQuery(['habit', { id: habitId }], () =>
    API.get(`/habits/${habitId}`),
  );
  const currDate = getCurrDate(data?.start_date, true) as number;
  const currComplete = data?.daily_status?.map((date: boolean, idx: number) =>
    idx === currDate ? true : date,
  );
  console.log(router);
  // const dateSet = getDateSet(data?.start_date, data?.end_date);

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

  if (isLoading) return <>Loading...</>;
  return (
    <>
      <HabitTemplate habit={data} handleComplete={handleComplete} handleDelete={handleDelete} />
    </>
  );
};

export default Habit;
