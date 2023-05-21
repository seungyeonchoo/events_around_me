import { useState } from 'react';
import HabitListButton from '../../Molecules/HabitListButton';

export interface ListBoxProps {}

const ListBox = ({ ...rest }: ListBoxProps) => {
  const [toggle, setToggle] = useState<'total' | 'completed' | 'not_yet'>('total');
  const handleToggle = (option: 'total' | 'completed' | 'not_yet') => {
    setToggle(option);
  };

  return (
    <section className="h-[25rem] w-[40rem] bg-default max-sm:w-[20rem] flex flex-col justify-between shadow-md rounded-t-xl overflow-hidden">
      <HabitListButton toggle={toggle} onClick={handleToggle} />
      <section className="h-[23rem] w-[98%] bg-white mx-auto my-1 rounded-xl"></section>
    </section>
  );
};

export default ListBox;
