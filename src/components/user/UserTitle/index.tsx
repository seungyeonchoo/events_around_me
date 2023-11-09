import { IUser } from '@/src/lib/types';
import CurrentInfo from './components/CurrentInfo';
import WelcomeTitle from './components/WelcomeTitle';

export interface UserTitleProps {
  user: IUser;
}

const UserTitle = ({ user }: UserTitleProps) => {
  return (
    <section className="mb-[0.5rem] w-[25rem] sm:w-[90%] md:w-[90%] lg:mx-[1rem]">
      <WelcomeTitle user={user} />
      <CurrentInfo />
      <div className="w-full h-[14rem] mt-[0.5rem] sm:hidden md:hidden border-t border-b flex flex-col justify-evenly">
        <span className="w-full text-center py-[0.5rem] font-bold text-default_weak hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]">
          습관만들기
        </span>
        <span className="w-full text-center py-[0.5rem] font-bold text-default_weak hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]">
          일기쓰기
        </span>
        <span className="w-full text-center py-[0.5rem] font-bold text-default_weak hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]">
          마이페이지
        </span>
        <span className="w-full text-center py-[0.5rem] font-bold text-default_weak hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]">
          로그아웃
        </span>
      </div>
    </section>
  );
};

export default UserTitle;
