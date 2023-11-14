import { IDiary } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import DiaryCalendar from '../DiaryCalendar';
import DiaryNote from '../DiaryNote';

interface DiaryTemplateProps {
  currDate: string;
  // eslint-disable-next-line no-unused-vars
  handleCurrentDate: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  diaries: IDiary[];
}

const DiaryTemplate = ({ currDate, handleCurrentDate }: DiaryTemplateProps) => {
  return (
    <section className="relative flex justify-center sm:flex-col md:flex-col sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] py-[10%]">
      <DiaryCalendar handleCurrCalendar={handleCurrentDate} />
      <DiaryNote currDate={currDate} />
    </section>
  );
};

export default DiaryTemplate;
