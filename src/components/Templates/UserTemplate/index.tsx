import { IUser } from '@/src/types';
import ListBox from '../../Organisms/ListBox';
import UserTitle from '../../Organisms/UserTitle';
import Header from '../Header';

export interface UserTemplateProps {
  user: IUser;
}

const UserTemplate = ({ user }: UserTemplateProps) => {
  return (
    <main className="flex flex-col items-center">
      <UserTitle user={user} />
      <ListBox habits={user?.habits} />
    </main>
  );
};

export default UserTemplate;
