import { ChangeEvent } from 'react';
import DiaryNoteButtons from './DiaryNoteButtons';
import DiaryNoteColorTool from './DiaryNoteColorTool';

interface DiaryNoteToolBarProps {
  backgroundColor: string;
  // eslint-disable-next-line no-unused-vars
  handleBackgroundColor: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DiaryNoteToolBar = ({ backgroundColor, handleBackgroundColor }: DiaryNoteToolBarProps) => {
  return (
    <section className="flex items-center absolute bottom-[1rem] right-[2rem]">
      <DiaryNoteColorTool
        backgroundColor={backgroundColor}
        handleBackgroundColor={handleBackgroundColor}
      />
      <DiaryNoteButtons />
    </section>
  );
};

export default DiaryNoteToolBar;
