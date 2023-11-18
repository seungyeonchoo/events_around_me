import useToggle from '@/src/lib/hooks/useToggle';
import useViewport from '@/src/lib/hooks/useViewport';
import { id } from '@/src/lib/utils/storage';
import Logo from './components/Logo';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';

const Header = () => {
  const { toggle, handleToggle } = useToggle();
  const { width } = useViewport();

  return (
    <>
      <header className="flex justify-evenly w-full p-3">
        <MenuButton onClick={handleToggle} />
        <Logo />
        {toggle && <Menu id={id} handleToggle={handleToggle} />}
      </header>
    </>
  );
};

export default Header;

// screens: {
//   sm: { max: '819px' },
//   md: { min: '820px', max: '1023px' },
//   lg: { min: '1080px' },
// },
