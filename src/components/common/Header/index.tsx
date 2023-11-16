import useToggle from '@/src/lib/hooks/useToggle';
import useViewport from '@/src/lib/hooks/useViewport';
import Link from 'next/link';
import Logo from './components/Logo';
import MenuButton from './components/MenuButton';

const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

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
  console.log(id);

  return (
    <>
      <header className="flex justify-evenly w-full p-3">
        <Logo />
        {(width as number) < 819 && <MenuButton onClick={handleToggle} />}
        {(width as number) < 819 && toggle && (
          <div className="absolute flex flex-col top-[4rem] w-full h-full bg-gray-50 z-10 py-[5rem]">
            <Link
              href={`/user/${id}`}
              className="p-[1rem] text-primary hover:text-primary_strong m-[2rem] border-b text-[1.5rem] font-bold text-center"
              onClick={handleToggle}
            >
              Habbit
            </Link>
            <Link
              href={`/diary/${id}`}
              className="p-[1rem] text-primary hover:text-primary_strong m-[2rem] border-b text-[1.5rem] font-bold text-center"
              onClick={handleToggle}
            >
              Diary
            </Link>
            <button className="p-[1rem] text-primary hover:text-primary_strong m-[2rem] border-b text-[1.5rem] font-bold text-center">
              Logout
            </button>
          </div>
        )}
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
