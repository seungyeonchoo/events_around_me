import { IUser } from '@/src/types';
import Text from '../../Atoms/Text';

export interface WelcomeTitleProps {
  user: IUser;
}

const WelcomeTitle = ({ user }: WelcomeTitleProps) => {
  return (
    <Text text_tag="h1" color="primary" size="3xl" extra_style="text-center max-sm:text-2xl" bold>
      Welcome <br /> {user?.firstName.toUpperCase()}
    </Text>
  );
};

export default WelcomeTitle;
