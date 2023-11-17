import useToggle from '@/src/lib/hooks/useToggle';
import useViewport from '@/src/lib/hooks/useViewport';
import Logo from './components/Logo';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';

const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string)?.id : null;

export const getServerSideProps = async (context: any) => {
  const userID = context?.query.id;

  return {
    props: {
      userID,
    },
  };
};

const Header = ({ userID }: any) => {
  const { toggle, handleToggle } = useToggle();
  const { width } = useViewport();

  return (
    <>
      <header className="flex justify-evenly w-full p-3">
        <Logo />
        {(width as number) < 819 && <MenuButton onClick={handleToggle} />}
        {(width as number) < 819 && toggle && <Menu id={id} handleToggle={handleToggle} />}
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
