import UserTemplate from '@/src/components/user/UserTemplate';
import { mockUser } from '@/src/lib/mocks/mockData';

const User = () => {
  return (
    <main>
      <UserTemplate user={mockUser} />
    </main>
  );
};

export default User;
