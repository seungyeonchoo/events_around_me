import { ChangeEvent } from 'react';
import DiaryNoteHeader from './components/DiaryNoteHeader';
import DiaryNoteTextArea from './components/DiaryNoteTextArea';
import DiaryNoteToolBar from './components/DiaryNoteToolBar';

interface DiaryNoteProps {
  currDate: string;
  backgroundColor: string;
  // eslint-disable-next-line no-unused-vars
  handleBackgroundColor: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DiaryNote = ({ currDate, backgroundColor, handleBackgroundColor }: DiaryNoteProps) => {
  const [year, month, date, day] = currDate.split(' ');

  return (
    <section
      className={`p-[1.5rem] h-[30rem] w-[40rem] sm:w-[90%] md:w-[90%] flex flex-col justify-between bg-yellow-200 shadow-md rounded-xl overflow-hidden relative ${backgroundColor}`}
    >
      <DiaryNoteHeader year={year} month={month} date={date} day={day} />
      <DiaryNoteTextArea backgroundColor={backgroundColor} />
      <DiaryNoteToolBar
        backgroundColor={backgroundColor}
        handleBackgroundColor={handleBackgroundColor}
      />
    </section>
  );
};

export default DiaryNote;
