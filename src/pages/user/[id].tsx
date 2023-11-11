import UserTemplate from '@/src/components/user/UserTemplate';
import useInput from '@/src/lib/hooks/useInput';
import useToggle from '@/src/lib/hooks/useToggle';
import ApiService from '@/src/lib/service';
import { getEndDate } from '@/src/lib/utils/dateUtils';
import getDateList, { getDateStatus } from '@/src/lib/utils/getDateList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const API = new ApiService();
const user = typeof window !== 'undefined' && JSON.parse(sessionStorage.getItem('user') as string);
const habitDateList = getDateList(
  new Date().toDateString(),
  new Date(new Date().setDate(new Date().getDate() + 30)).toDateString(),
);

const initialHabit = {
  title: '',
  start_date: new Date().toDateString(),
  end_date: '',
  description: '',
  userId: user?.id,
  daily_status: habitDateList,
  duration: 0,
};

export const getServerSideProps = async (context: any) => {
  const userID = context?.query.id;

  return {
    props: {
      userID,
    },
  };
};

const User = ({ userID }: any) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { input: habitInput, handleInput: handleHabitInput, resetInput } = useInput(initialHabit);
  const { toggle: createToggle, handleToggle: handleCreateToggle } = useToggle(false);

  const { data: userData } = useQuery(['user', { id: user?.id }], () =>
    API.get(`/users/${user?.id}`, { _embed: 'habits' }),
  );

  const { mutate } = useMutation(
    () =>
      API.post('/habits', {
        ...habitInput,
        end_date: getEndDate(habitInput.duration),
        daily_status: getDateStatus(habitInput.duration),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        resetInput();
        handleCreateToggle();
      },
    },
  );

  const handleCancel = () => {
    resetInput();
    handleCreateToggle();
  };

  useEffect(() => {
    if (+userID !== user?.id) router.push(`/user/${user?.id}`);
  }, []);

  return (
    <main>
      <UserTemplate
        user={userData}
        habitInput={habitInput}
        handleHabitInput={handleHabitInput}
        createToggle={createToggle}
        handleCreateToggle={handleCreateToggle}
        createHabit={mutate}
        handleCancel={handleCancel}
      />
    </main>
  );
};

export default User;
