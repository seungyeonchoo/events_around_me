import { IHabit } from '@/src/types';
import { useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import Button from '../../Atoms/Button';
import HabitListButton from '../../Molecules/HabitListButton';
import ListFilterToggle from '../../Molecules/ListFilterToggle';
import HabitList from '../HabitList';

export interface ListBoxProps {
  habits: IHabit[];
}

const ListBox = ({ habits }: ListBoxProps) => {
  const { toggle: finishedToggle, handleToggle: handleFinishedToggle } = useToggle();
  const [toggle, setToggle] = useState<'total' | 'completed' | 'not_yet'>('total');
  const handleToggle = (option: 'total' | 'completed' | 'not_yet') => {
    setToggle(option);
  };

  return (
    <section className="h-[25rem] w-[40rem] bg-default max-sm:w-full flex flex-col justify-between shadow-md rounded-t-xl overflow-hidden relative">
      <HabitListButton toggle={toggle} onClick={handleToggle} />
      {toggle === 'total' && (
        <ListFilterToggle onChange={handleFinishedToggle} showAll={finishedToggle} />
      )}
      <HabitList habits={habits} finishedToggle={finishedToggle} status={toggle} />
      <Button
        size="sm"
        color="primary"
        rounded
        extra_style="absolute bottom-[1rem] right-[1rem] shadow-xl"
      >
        ✏️
      </Button>
    </section>
  );
};

export default ListBox;
