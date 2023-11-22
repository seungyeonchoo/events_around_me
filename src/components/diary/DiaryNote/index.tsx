import { IDiary } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import DiaryNoteHeader from './components/DiaryNoteHeader';
import DiaryNoteTextArea from './components/DiaryNoteTextArea';
import DiaryNoteToolBar from './components/DiaryNoteToolBar';

interface DiaryNoteProps {
  currDate: string;
  editToggle: boolean;
  handleEditToggle: () => void;
  diary: IDiary;
  handleDiary: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlePost: () => void;
  handlePatch: () => void;
  handleDelete: () => void;
  handleInit: () => void;
}

const DiaryNote = ({
  currDate,
  editToggle,
  handleEditToggle,
  handleDelete,
  handlePatch,
  handlePost,
  diary,
  handleDiary,
  handleInit,
}: DiaryNoteProps) => {
  const [year, month, date, day] = currDate.split(' ');

  return (
    <section
      className={`p-[1.5rem] h-[30rem] w-[40rem] sm:w-[90%] md:w-[90%] flex flex-col justify-between shadow-md rounded-xl overflow-hidden relative ${diary.color}`}
    >
      <DiaryNoteHeader year={year} month={month} date={date} day={day} />
      <DiaryNoteTextArea
        name="content"
        value={diary.content}
        onChange={handleDiary}
        disabled={!editToggle}
        placeholder={editToggle ? '내용을 입력해주세요.' : ''}
      />
      <DiaryNoteToolBar
        editToggle={editToggle}
        backgroundColor={diary.color}
        handleBackgroundColor={handleDiary}
        handleEditToggle={handleEditToggle}
        handlePostDiary={diary.id ? handlePatch : handlePost}
        handleDeleteDiary={diary.id ? handleDelete : handleInit}
      />
    </section>
  );
};

export default DiaryNote;
