import UserTemplate from '@/src/components/user/UserTemplate';
import { mockUser } from '@/src/lib/mocks/mockData';
import ApiService from '@/src/lib/service';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const API = new ApiService();

export const getServerSideProps = async (context: any) => {
  const userID = context?.query.id;
  const data = await API.get(`/users/${userID}`, { _embed: 'habits' });

  return {
    props: {
      data,
      userID,
    },
  };
};

const User = ({ data, userID }: any) => {
  const router = useRouter();
  const user =
    typeof window !== 'undefined' && JSON.parse(sessionStorage.getItem('user') as string);

  useEffect(() => {
    if (userID !== user?.id) router.push(`/user/${user?.id}`);
  }, []);

  console.log(data);

  return (
    <main>
      <UserTemplate user={mockUser} />
    </main>
  );
};

export default User;
