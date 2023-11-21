import { ChangeEvent } from 'react';
import ColorCheckBox from './ColorCheckBox';

interface DiaryNoteColorToolProps {
  backgroundColor: string;
  // eslint-disable-next-line no-unused-vars
  handleBackgroundColor: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DiaryNoteColorTool = ({
  backgroundColor,
  handleBackgroundColor,
}: DiaryNoteColorToolProps) => {
  return (
    <div className="flex bg-white p-[0.3rem] rounded-[0.5rem]">
      <ColorCheckBox
        value="bg-gray-100"
        onChange={handleBackgroundColor}
        checked={backgroundColor === 'bg-gray-100'}
      />
      <ColorCheckBox
        value="bg-yellow-100"
        onChange={handleBackgroundColor}
        checked={backgroundColor === 'bg-yellow-100'}
      />
      <ColorCheckBox
        value="bg-green-100"
        onChange={handleBackgroundColor}
        checked={backgroundColor === 'bg-green-100'}
      />
      <ColorCheckBox
        value="bg-purple-100"
        onChange={handleBackgroundColor}
        checked={backgroundColor === 'bg-purple-100'}
      />
    </div>
  );
};

export default DiaryNoteColorTool;
