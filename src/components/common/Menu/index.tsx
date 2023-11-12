import Link from 'next/link';
import { useRouter } from 'next/router';

export const getServerSideProps = async () => {
  const userID =
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

  return {
    props: {
      userID,
    },
  };
};

const Menu = ({ userId }: any) => {
  const { pathname } = useRouter();
  const isCurrentPage = (page: string) =>
    pathname.split('/')[1] === page ? 'text-yellow-300' : 'text-default_weak';

  return (
    <div className="w-full h-[14rem] mt-[0.5rem] sm:hidden md:hidden border-t border-b flex flex-col justify-evenly px-[2rem]">
      <Link
        href={`/user/${userId}`}
        className={`${isCurrentPage(
          'user',
        )} w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]`}
      >
        습관만들기
      </Link>
      <Link
        href={`/diary/${userId}`}
        className={`${isCurrentPage(
          'diary',
        )} w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]`}
      >
        일기쓰기
      </Link>
      <Link
        href={`/mypage/${userId}`}
        className={`${isCurrentPage(
          'mypage',
        )} w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]`}
      >
        마이페이지
      </Link>
      <span className="text-default_weak w-full text-center py-[0.5rem] font-bold hover:text-yellow-300 cursor-pointer bg-primary_weak rounded-[1rem]">
        로그아웃
      </span>
    </div>
  );
};

export default Menu;
