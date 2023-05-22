import { IUser } from '@/src/types';
import Text from '../../Atoms/Text';

export interface HeaderProps {
  user: IUser;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="w-full bg-primary p-3 max-sm:text-center">
      <Text text_tag="span" size="xl" color="default" bold>
        🔥 MAKE MY HABIT
      </Text>
    </header>
  );
};

export default Header;
