import CurrentDate from '../../Molecules/CurrentDate';
import WelcomeTitle, { WelcomeTitleProps } from '../../Molecules/WelcomeTitle';

export interface UserTitleProps extends WelcomeTitleProps {}

const UserTitle = ({ user }: UserTitleProps) => {
  return (
    <section className="my-10 w-full">
      <WelcomeTitle user={user} />
      <CurrentDate />
    </section>
  );
};

export default UserTitle;
