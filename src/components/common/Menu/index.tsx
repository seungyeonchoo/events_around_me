import { useRouter } from 'next/router';

const Menu = () => {
  const { pathname } = useRouter();
  const isCurrentPage = (page: string) =>
    pathname.split('/')[1] === page ? 'text-yellow-300' : 'text-default_weak';

  return (
    <div className="w-full h-[14rem] mt-[0.5rem] sm:hidden md:hidden border-t border-b flex flex-col justify-evenly px-[2rem]">
      <span
        className={`${isCurrentPage(
          'user',
        )} w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]`}
      >
        습관만들기
      </span>
      <span
        className={`${isCurrentPage(
          'diary',
        )} w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]`}
      >
        일기쓰기
      </span>
      <span
        className={`${isCurrentPage(
          'mypage',
        )} w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]`}
      >
        마이페이지
      </span>
      <span className="text-default_weak w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]">
        로그아웃
      </span>
    </div>
  );
};

export default Menu;
