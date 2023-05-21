import { IHabit } from '@/src/types';
import { useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import CheckBox from '../../Atoms/CheckBox';
import Text from '../../Atoms/Text';
import HabitListButton from '../../Molecules/HabitListButton';
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
    <section className="h-[25rem] w-[40rem] bg-default max-sm:w-full flex flex-col justify-between shadow-md rounded-t-xl overflow-hidden">
      <HabitListButton toggle={toggle} onClick={handleToggle} />
      {toggle === 'total' && (
        <label className="mt-1 px-5 flex justify-end items-center">
          <Text text_tag="span" size="xs" color="dark" bold extra_style="mx-2">
            only ongoing
          </Text>
          <CheckBox
            toggle_size="sm"
            color="primary"
            onChange={handleFinishedToggle}
            showAll={finishedToggle}
          />
        </label>
      )}
      <HabitList habits={habits} finishedToggle={finishedToggle} status={toggle} />
    </section>
  );
};

export default ListBox;
