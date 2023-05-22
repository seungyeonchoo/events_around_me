import Text from '../../../../../../src/components/common/Text';
import { IUser } from '../../../../../../src/lib/types';

export interface WelcomeTitleProps {
  user: IUser;
}

const WelcomeTitle = ({ user }: WelcomeTitleProps) => {
  return (
    <Text text_tag="h1" color="primary" size="3xl" extra_style="text-center max-sm:hidden" bold>
      Welcome {user?.firstName.toUpperCase()}
    </Text>
  );
};

export default WelcomeTitle;
