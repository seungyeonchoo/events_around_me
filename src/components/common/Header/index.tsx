import { useRouter } from 'next/router';
import Logo from './components/Logo';
import Nav from './components/Nav';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <>
      <header className="flex items-center justify-around w-full py-[1rem]">
        <Logo />
        {pathname !== '/' && <Nav />}
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
