import Link from 'next/link';
import { useRouter } from 'next/router';

interface MenuProps {
  id: number;
  handleToggle: () => void;
}

const Menu = ({ id, handleToggle }: MenuProps) => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.clear();
    handleToggle();
    router.push(`/`);
  };

  if (typeof window === 'undefined') return <div />;
  return (
    <section className="absolute flex flex-col top-[4rem] w-full h-full bg-gray-50 z-10 py-[5rem]">
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
      <button
        className="p-[1rem] text-primary hover:text-primary_strong m-[2rem] border-b text-[1.5rem] font-bold text-center"
        onClick={handleLogout}
      >
        Logout
      </button>
    </section>
  );
};

export default Menu;
