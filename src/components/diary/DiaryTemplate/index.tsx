import { IDiary } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import DiaryCalendar from '../DiaryCalendar';
import DiaryNote from '../DiaryNote';

interface DiaryTemplateProps {
  diaryInput: IDiary;
  // eslint-disable-next-line no-unused-vars
  handleDiaryInput: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  diaries: IDiary[];
  handlePostDiary: () => void;
}

const DiaryTemplate = ({
  diaries,
  handleDiaryInput,
  diaryInput,
  handlePostDiary,
}: DiaryTemplateProps) => {
  return (
    <section className="relative flex justify-center sm:flex-col md:flex-col sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] py-[10%]">
      <DiaryCalendar handleCurrCalendar={handleDiaryInput} />
      <DiaryNote
        content={diaryInput.content}
        currDate={diaryInput.date}
        backgroundColor={diaryInput.color}
        handleDiaryInput={handleDiaryInput}
        handlePostDiary={handlePostDiary}
      />
    </section>
  );
};

export default DiaryTemplate;
