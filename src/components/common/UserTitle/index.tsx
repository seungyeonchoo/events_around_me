import { IUser } from '@/src/lib/types';
import Menu from '../Menu';
import CurrentInfo from './components/CurrentInfo';
import WelcomeTitle from './components/WelcomeTitle';

export interface UserTitleProps {
  user: IUser;
}

const UserTitle = ({ user }: UserTitleProps) => {
  return (
    <section className="mb-[0.5rem] w-[25rem] sm:w-[90%] md:w-[90%] lg:mx-[1rem]">
      <WelcomeTitle user={user} />
      <CurrentInfo />
      <Menu />
    </section>
  );
};

export default UserTitle;
