import { useRouter } from 'next/router';
import Logo from './components/Logo';
import Nav from './components/Nav';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <>
      <header className="flex items-center justify-around w-full py-[1rem] border-b shadow-md">
        <Logo />
        {pathname !== '/' && <Nav />}
      </header>
    </>
  );
};

export default Header;
