import useGetCalendar from '@/src/lib/hooks/useGetCalendar';
import { IDiary } from '@/src/lib/types';
import { ChangeEvent, useState } from 'react';
import CalendarDate from './CalendarDate';
import CalendarHeader from './CalendarHeader';

interface CalendarProps {
  // eslint-disable-next-line no-unused-vars
  handleCurrCalendar: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  diaries: IDiary[];
  checkedDate: string;
}

const Calendar = ({ handleCurrCalendar, diaries, checkedDate }: CalendarProps) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const [currDate, setCurrDate] = useState<{ year: number; month: number }>({ year, month });

  const { calendar, prevMonth, prevYear, nextMonth, nextYear } = useGetCalendar(
    currDate.year,
    currDate.month,
  );

  const handlePrevMonth = () => {
    if (currDate.month <= 1) setCurrDate({ year: currDate.year - 1, month: 12 });
    else setCurrDate({ ...currDate, month: currDate.month - 1 });
  };

  const handleNextMonth = () => {
    if (currDate.month >= 12) setCurrDate({ year: currDate.year + 1, month: 1 });
    else setCurrDate({ ...currDate, month: currDate.month + 1 });
  };

  return (
    <section className="h-[16rem]">
      <CalendarHeader
        year={currDate.year}
        month={currDate.month}
        prevYear={prevYear}
        prevMonth={prevMonth}
        nextYear={nextYear}
        nextMonth={nextMonth}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <div className="w-full h-[13.5rem] grid grid-cols-7 gap-y-1">
        {calendar.map(date => (
          <CalendarDate
            key={date.detail}
            dateInfo={date}
            curr_month={currDate.month}
            curr_year={currDate.year}
            handleCurrCalendar={handleCurrCalendar}
            diaries={diaries}
            checkedDate={checkedDate}
          />
        ))}
      </div>
    </section>
  );
};

export default Calendar;
