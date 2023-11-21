import { ComponentPropsWithoutRef } from 'react';

export interface HabitDescriptionProps extends ComponentPropsWithoutRef<'textarea'> {}

const HabitDescription = ({ ...props }: HabitDescriptionProps) => {
  return (
    <textarea
      className="border border-dark w-[90%] max-sm:w-[81%] max-sm:h-[13rem] my-10 p-5 h-[8rem] text-xs mx-auto resize-none "
      autoComplete="off"
      placeholder="Habit Description"
      name="description"
      {...props}
    />
  );
};

export default HabitDescription;
