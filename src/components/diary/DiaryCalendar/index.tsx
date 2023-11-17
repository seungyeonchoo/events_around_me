import { IDiary } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import Menu from '../../common/Menu';
import Calendar from './components/Calendar';

interface DiaryCalendarProps {
  // eslint-disable-next-line no-unused-vars
  handleCurrCalendar: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  diaries: IDiary[];
  currDate: string;
}

const DiaryCalendar = ({ handleCurrCalendar, diaries, currDate }: DiaryCalendarProps) => {
  console.log(currDate);
  return (
    <section className="mb-[0.5rem] w-[25rem] sm:w-[90%] md:w-[90%] lg:mx-[1rem] sm:mb-[0.5rem]">
      <Calendar handleCurrCalendar={handleCurrCalendar} diaries={diaries} checkedDate={currDate} />
      <Menu />
    </section>
  );
};

export default DiaryCalendar;
