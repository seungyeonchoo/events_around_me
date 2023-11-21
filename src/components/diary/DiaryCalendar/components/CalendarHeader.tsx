interface CalendarHeaderProps {
  year: number;
  month: number;
  prevYear: number;
  prevMonth: number;
  nextYear: number;
  nextMonth: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

const CalendarHeader = ({
  year,
  month,
  handlePrevMonth,
  handleNextMonth,
  prevMonth,
  prevYear,
  nextMonth,
  nextYear,
}: CalendarHeaderProps) => {
  return (
    <section className="flex justify-between items-center h-[2.5rem] px-[1.5rem] pb-[0.75rem] leading-[1rem] border-b">
      <button
        className="flex flex-col items-start text-gray-300 hover:text-primary"
        onClick={handlePrevMonth}
      >
        <span className="text-[0.75rem]">{prevYear}년 </span>
        <span className="text-[1rem] font-bold">{prevMonth}월</span>
      </button>
      <div className="mx-[1rem] flex flex-col items-start text-primary">
        <span className="text-[0.75rem]">{year}년 </span>
        <span className="text-[1rem] font-bold">{month}월</span>
      </div>
      <button
        className="flex flex-col items-start  text-gray-300 hover:text-primary"
        onClick={handleNextMonth}
      >
        <span className="text-[0.75rem]">{nextYear}년 </span>
        <span className="text-[1rem] font-bold">{nextMonth}월</span>
      </button>
    </section>
  );
};

export default CalendarHeader;
