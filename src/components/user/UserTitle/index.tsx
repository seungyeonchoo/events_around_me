import { IUser } from '@/src/lib/types';
import CurrentDate from './components/CurrentDate';
import WelcomeTitle from './components/WelcomeTitle';

export interface UserTitleProps {
  user: IUser;
}

const UserTitle = ({ user }: UserTitleProps) => {
  return (
    <section className="mt-10 mb-5 w-full">
      <WelcomeTitle user={user} />
      <CurrentDate />
    </section>
  );
};

export default UserTitle;
