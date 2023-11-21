import { ChangeEvent } from 'react';
import DiaryNoteButtons from './DiaryNoteButtons';
import DiaryNoteColorTool from './DiaryNoteColorTool';

interface DiaryNoteToolBarProps {
  backgroundColor: string;
  editToggle: boolean;
  // eslint-disable-next-line no-unused-vars
  handleBackgroundColor: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEditToggle: () => void;
  handlePostDiary: () => void;
  handleDeleteDiary: () => void;
}

const DiaryNoteToolBar = ({
  backgroundColor,
  handleBackgroundColor,
  handleEditToggle,
  handlePostDiary,
  handleDeleteDiary,
  editToggle,
}: DiaryNoteToolBarProps) => {
  return (
    <section className="flex items-center absolute bottom-[1rem] right-[2rem]">
      <DiaryNoteColorTool
        backgroundColor={backgroundColor}
        handleBackgroundColor={handleBackgroundColor}
      />
      <DiaryNoteButtons
        handleEditToggle={handleEditToggle}
        handlePostDiary={handlePostDiary}
        handleDeleteDiary={handleDeleteDiary}
        editToggle={editToggle}
      />
    </section>
  );
};

export default DiaryNoteToolBar;
