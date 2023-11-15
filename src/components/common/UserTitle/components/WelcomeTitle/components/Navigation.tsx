const Navigation = () => {
  return (
    <nav className="flex flex-col text-default_weak lg:hidden text-[0.9375rem] text-center">
      <p className="cursor-pointer hover:font-bold hover:text-yellow-300">할일</p>
      <p className="cursor-pointer hover:font-bold hover:text-yellow-300">일기</p>
      <p className="cursor-pointer hover:font-bold hover:text-yellow-300">MY</p>
      <p className="cursor-pointer hover:font-bold hover:text-yellow-300">로그아웃</p>
    </nav>
  );
};
export default Navigation;
