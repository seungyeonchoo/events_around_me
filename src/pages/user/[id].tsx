import UserTemplate from '@/src/components/user/UserTemplate';
import { mockUser } from '@/src/lib/mocks/mockData';
import ApiService from '@/src/lib/service';

const API = new ApiService();

export const getServerSideProps = async () => {
  const data = await API.get('/users');

  return {
    props: {
      data: data,
    },
  };
};

const User = (props: any) => {
  console.log(props.data);

  const signUp = async () => {
    await API.post('/users', { email: 'cho433@email.com', password: '1234567889' });
  };

  const signIn = async () => {
    return await API.post('/signin', { email: 'cho433@email.com', password: '1234567889' });
  };

  return (
    <main>
      <UserTemplate user={mockUser} />
      <button onClick={signUp}>signup</button>
      <button onClick={signIn}>signin</button>
    </main>
  );
};

export default User;
