import DiaryIcon from '@/public/svgs/icon _diary.svg';
import HabitIcon from '@/public/svgs/icon _habit.svg';
import LogoutIcon from '@/public/svgs/icon _sign-out.svg';
import { id } from '@/src/lib/utils/storage';
import { useRouter } from 'next/router';

const Nav = () => {
  const { push, pathname } = useRouter();
  const handleToHabit = () => {
    push(`/user/${id}`);
  };
  const handleToDiary = () => {
    push(`/diary/${id}`);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    push('/');
  };
  return (
    <nav className="flex justify-between">
      <HabitIcon
        onClick={handleToHabit}
        className={`${
          pathname === '/user/[id]'
            ? 'fill-secondary_strong stroke-secondary_strong'
            : 'fill-secondary stroke-secondary'
        } mx-[0.35rem] cursor-pointer hover:fill-secondary_strong hover:stroke-secondary_strong`}
      />
      <DiaryIcon
        onClick={handleToDiary}
        className={`${
          pathname === '/diary/[id]'
            ? 'fill-secondary_strong stroke-secondary_strong'
            : 'fill-secondary stroke-secondary'
        } mx-[0.35rem] cursor-pointer hover:fill-secondary_strong hover:stroke-secondary_strong`}
      />
      <LogoutIcon
        onClick={handleLogout}
        className="fill-secondary stroke-secondary mx-[0.35rem] cursor-pointer hover:fill-secondary_strong"
      />
    </nav>
  );
};

export default Nav;
