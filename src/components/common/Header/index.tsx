import useViewport from '@/src/lib/hooks/useViewport';

const Header = () => {
  const { width, height } = useViewport();
  console.log(width, height);
  return (
    <header className="w-full p-3">
      <h1 className="bg-primary w-[15rem] p-[0.5rem] text-[1.25rem] font-bold text-default_weak text-center mx-auto rounded-[0.25rem]">
        🔥 MAKE MY HABIT
      </h1>
    </header>
  );
};

export default Header;
