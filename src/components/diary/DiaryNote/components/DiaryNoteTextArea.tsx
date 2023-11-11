import { ComponentPropsWithoutRef } from 'react';

interface DiaryNoteTextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  backgroundColor: string;
}

const DiaryNoteTextArea = ({ backgroundColor, ...rest }: DiaryNoteTextAreaProps) => {
  return (
    <textarea
      className={`h-[90%] py-[1rem] bg-yellow-200 focus:outline-none resize-none text-[0.75rem] text-default_strong leading-[1.75rem] ${backgroundColor}`}
      placeholder="내용을 입력해주세요."
      {...rest}
    />
  );
};

export default DiaryNoteTextArea;
