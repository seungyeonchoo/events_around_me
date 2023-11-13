import { ChangeEvent } from 'react';
import { UseMutateFunction } from 'react-query';
import DiaryNoteButtons from './DiaryNoteButtons';
import DiaryNoteColorTool from './DiaryNoteColorTool';

interface DiaryNoteToolBarProps {
  backgroundColor: string;
  editToggle: boolean;
  // eslint-disable-next-line no-unused-vars
  handleBackgroundColor: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEditToggle: () => void;
  handlePostDiary: UseMutateFunction<any, unknown, void, unknown>;
}

const DiaryNoteToolBar = ({
  backgroundColor,
  handleBackgroundColor,
  handleEditToggle,
  handlePostDiary,
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
        editToggle={editToggle}
      />
    </section>
  );
};

export default DiaryNoteToolBar;
