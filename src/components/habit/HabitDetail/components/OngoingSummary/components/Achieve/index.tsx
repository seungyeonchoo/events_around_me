export interface AchieveProps {
  title: string;
  complete_date: number;
  total_date: number;
}

const Achieve = ({ title, complete_date, total_date }: AchieveProps) => {
  const rate =
    !total_date || !complete_date
      ? '- '
      : Math.floor((complete_date / total_date) * 100).toFixed(1);

  return (
    <div className="w-[18rem] h-[2.5rem] flex shadow-lg max-sm:w-[7rem] max-sm:h-[2rem] rounded-lg overflow-hidden">
      <span className="bg-secondary text-default w-[30%] flex justify-center items-center text-sm font-bold max-sm:w-[50%] max-sm:text-xs">
        {title?.toUpperCase()}
      </span>
      <span className="w-[70%] text-dark_weak bg-default_weak flex justify-center items-center text-sm font-bold max-sm:w-[50%] max-sm:text-xs">
        {rate}%
        <span className="max-sm:hidden">
          ({complete_date} of {total_date})
        </span>
      </span>
    </div>
  );
};

export default Achieve;
