import { IHabit } from '@/src/lib/types';
import { useState } from 'react';
import { getFilteredHabits } from '../../../../src/lib/utils/getFilteredHabits';
import useToggle from '../../../lib/hooks/useToggle';
import HabitButton from './components/HabitButton';
import HabitContainer from './components/HabitContainer';
import NewHabit from './components/NewHabit';
import OngoingToggle from './components/OngoingToggle';

export interface UserHabitListProps {
  habits: IHabit[];
  handleCreateToggle: () => void;
}

const UserHabitList = ({ habits, handleCreateToggle }: UserHabitListProps) => {
  const { toggle: ongoingToggle, handleToggle: handleOngoingToggle } = useToggle(false);

  const [toggle, setToggle] = useState<'total' | 'completed' | 'not_yet'>('total');

  const handleToggle = (option: 'total' | 'completed' | 'not_yet') => {
    setToggle(option);
  };

  return (
    <section className="h-[30rem] w-[40rem] bg-default_weak max-sm:w-[90%] flex flex-col justify-between shadow-md rounded-xl overflow-hidden relative">
      <HabitButton toggle={toggle} onClick={handleToggle} />
      {toggle === 'total' && (
        <OngoingToggle onChange={handleOngoingToggle} ongoing={ongoingToggle} />
      )}
      <HabitContainer habits={getFilteredHabits(habits, ongoingToggle, toggle)} />
      <NewHabit handleNewHabitToggle={handleCreateToggle} />
    </section>
  );
};

export default UserHabitList;
