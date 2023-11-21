import { IDiary } from '@/src/lib/types';
import { getTime } from '@/src/lib/utils/dateUtils';
import { ChangeEvent } from 'react';

interface CalendarDateProps {
  dateInfo: { year: number; month: number; date: number; day: string; detail: string };
  diaries: IDiary[];
  curr_year: number;
  curr_month: number;
  // eslint-disable-next-line no-unused-vars
  handleCurrCalendar: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  checkedDate: string;
}

const CalendarDate = ({
  diaries,
  dateInfo,
  curr_year,
  curr_month,
  checkedDate,
  handleCurrCalendar,
}: CalendarDateProps) => {
  const today = getTime();
  const { year, month, date, day, detail } = dateInfo;

  const isToday = detail === `${today.year}년 ${today.month}월 ${today.date}일 ${today.day}요일`;
  const isChecked = detail === checkedDate;

  const currDiary = diaries?.filter(diary => {
    return diary.date === `${year}년 ${month}월 ${date}일 ${day}요일`;
  });

  const color =
    year !== curr_year || month !== curr_month
      ? 'text-default'
      : day === '토' || day === '일'
      ? 'text-secondary'
      : 'text-primary_strong';

  console.log();

  return (
    <label
      className={`relative flex flex-col justify-between mx-1 py-[0.4rem] px-[0.5rem] text-[0.6rem] hover:shadow-lg rounded-[0.25rem] cursor-pointer ${color}`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        name="currDate"
        value={detail}
        onChange={handleCurrCalendar}
        checked={checkedDate === detail}
        disabled={new Date(`${year}-${month}-${date}`) > new Date()}
      />
      <div className="flex justify-between">
        <span key={detail}>{date}</span>
        <span>{day}</span>
      </div>
      {isToday && (
        <div className="w-full h-full absolute border border-secondary top-0 left-0 rounded-[0.25rem] border-collapse" />
      )}
      {isChecked && (
        <div className="w-full h-full absolute border border-primary top-0 left-0 rounded-[0.25rem]" />
      )}
      {currDiary?.length > 0 && (
        <div className="absolute bottom-2 w-[0.5rem] h-[0.5rem] bg-secondary rounded-full left" />
      )}
    </label>
  );
};

export default CalendarDate;
