export interface CalendarProps {
  title: string;
  date: number | 'DUE' | 'END' | '🔥';
}

const Calendar = ({ title, date }: CalendarProps) => {
  return (
    <div className="w-[7rem] h-[7rem] flex flex-col rounded-t-xl overflow-hidden shadow-md max-sm:flex-row max-sm:rounded-md max-sm:h-[2rem]">
      <span className="h-[30%] bg-primary text-default font-bold flex items-center justify-center max-sm:h-full max-sm:w-[50%] max-sm:text-xs">
        {title.toUpperCase()}
      </span>
      <span className="h-[70%] bg-default_weak font-bold text-dark_weak text-[2.5rem] flex items-center justify-center max-sm:h-full max-sm:w-[50%] max-sm:text-xs">
        {date}
      </span>
    </div>
  );
};

export default Calendar;
