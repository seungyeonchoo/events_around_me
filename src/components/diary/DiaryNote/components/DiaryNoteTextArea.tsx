import { ComponentPropsWithoutRef } from 'react';

interface DiaryNoteTextAreaProps extends ComponentPropsWithoutRef<'textarea'> {}

const DiaryNoteTextArea = ({ ...rest }: DiaryNoteTextAreaProps) => {
  return (
    <textarea
      className={`h-[90%] py-[1rem] focus:outline-none resize-none text-[0.75rem] text-default_strong leading-[1.75rem] bg-transparent`}
      {...rest}
    />
  );
};

export default DiaryNoteTextArea;
