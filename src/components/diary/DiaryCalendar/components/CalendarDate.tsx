import { ChangeEvent } from 'react';

interface CalendarDateProps {
  dateInfo: { year: number; month: number; date: number; day: string; detail: string };
  curr_year: number;
  curr_month: number;
  // eslint-disable-next-line no-unused-vars
  handleCurrCalendar: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CalendarDate = ({
  dateInfo,
  curr_year,
  curr_month,
  handleCurrCalendar,
}: CalendarDateProps) => {
  const { year, month, date, day, detail } = dateInfo;

  const color =
    year !== curr_year || month !== curr_month
      ? 'text-default'
      : day === '토' || day === '일'
      ? 'text-secondary'
      : 'text-primary_strong';

  return (
    <label
      className={`mx-1 py-[0.5rem] px-[0.5rem] text-[0.6rem] hover:shadow-lg rounded-[0.25rem] cursor-pointer ${color}`}
    >
      <input
        type="checkbox"
        className="sr-only peer"
        name="currDate"
        value={detail}
        onChange={handleCurrCalendar}
      />
      <div className="flex justify-between">
        <span key={detail}>{date}</span>
        <span>{day}</span>
      </div>
    </label>
  );
};

export default CalendarDate;
