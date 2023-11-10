import useGetCalendar from '@/src/lib/hooks/useGetCalendar';
import { useState } from 'react';
import Menu from '../../common/Menu';

const DiaryCalendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const [date, setDate] = useState<{ year: number; month: number }>({ year, month });

  const { calendar } = useGetCalendar(date.year, date.month);

  console.log(date);

  return (
    <section className="mb-[0.5rem] w-[25rem] sm:w-[90%] md:w-[90%] lg:mx-[1rem]">
      <div className="flex justify-between">
        <button
          onClick={() => {
            if (date.month <= 1) setDate({ year: date.year - 1, month: 12 });
            else setDate({ ...date, month: date.month - 1 });
          }}
        >
          이전달
        </button>
        <div>
          <span>{date.year}년 </span>
          <span>{date.month}월</span>
        </div>
        <button
          onClick={() => {
            if (date.month >= 12) setDate({ year: date.year + 1, month: 1 });
            else setDate({ ...date, month: date.month + 1 });
          }}
        >
          다음달
        </button>
      </div>
      <div className="w-full h-[16rem] bg-red-100 grid grid-cols-7">
        {calendar.map(date => (
          <span className="mx-1" key={date.detail}>
            {date.date}
          </span>
        ))}
      </div>

      <Menu />
    </section>
  );
};

export default DiaryCalendar;
