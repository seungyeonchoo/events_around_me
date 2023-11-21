import UserTemplate from '@/src/components/user/UserTemplate';
import useInput from '@/src/lib/hooks/useInput';
import useToggle from '@/src/lib/hooks/useToggle';
import ApiService from '@/src/lib/service';
import { getEndDate } from '@/src/lib/utils/dateUtils';
import { getDateStatus } from '@/src/lib/utils/getDateList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const getServerSideProps = async (context: any) => {
  const userID = context?.query.id;

  return {
    props: {
      userID,
    },
  };
};

const User = ({ userID }: any) => {
  const isRendered = typeof window !== 'undefined';
  const token = isRendered ? sessionStorage.getItem('access_Token') : null;
  const id = isRendered ? JSON.parse(sessionStorage.getItem('user') as string)?.id : null;
  const API = new ApiService();
  const { pathname, push } = useRouter();
  const queryClient = useQueryClient();

  const initialHabit = {
    title: '',
    start_date: new Date().toDateString(),
    end_date: '',
    description: '',
    userId: id,
    daily_status: [],
    duration: 0,
  };

  const { input: habitInput, handleInput: handleHabitInput, resetInput } = useInput(initialHabit);

  const { toggle: createToggle, handleToggle: handleCreateToggle } = useToggle(false);

  const { data: userData, isLoading } = useQuery(
    ['user', { id: id }],
    () => API.get(`/users/${id}`, { _embed: 'habits' }),
    {
      enabled: token !== undefined && id !== undefined,
    },
  );

  useEffect(() => {
    if (!token) push('/');
    if (+userID !== id) push(`/user/${id}`);
  }, [token]);

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

  return (
    <>
      <UserTemplate
        user={userData}
        habitInput={habitInput}
        handleHabitInput={handleHabitInput}
        createToggle={createToggle}
        handleCreateToggle={handleCreateToggle}
        createHabit={mutate}
        handleCancel={handleCancel}
        isLoading={isLoading}
      />
    </>
  );
};

export default User;
