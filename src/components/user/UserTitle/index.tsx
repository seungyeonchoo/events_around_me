import { IUser } from '@/src/lib/types';
import CurrentDate from './components/CurrentDate';
import WelcomeTitle from './components/WelcomeTitle';

export interface UserTitleProps {
  user: IUser;
}

const UserTitle = ({ user }: UserTitleProps) => {
  return (
    <section className="my-10 w-full">
      <WelcomeTitle user={user} />
      <CurrentDate />
    </section>
  );
};

export default UserTitle;
