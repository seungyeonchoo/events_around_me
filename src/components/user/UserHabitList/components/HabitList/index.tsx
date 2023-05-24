import { IHabit } from '../../../../../../src/lib/types';
import { getFilteredHabits } from '../../../../../../src/lib/utils/getFilteredHabits';
import HabitItem from '../HabitItem';

export interface HabitListProps {
  habits: IHabit[];
  finishedToggle: boolean;
  status: 'total' | 'completed' | 'not_yet';
}

const HabitList = ({ habits, finishedToggle, status }: HabitListProps) => {
  const filteredHabit = getFilteredHabits(habits, finishedToggle, status);

  return (
    <section className="h-[23rem] w-[95%] bg-white mx-auto my-1 rounded-xl overflow-hidden">
      {filteredHabit?.map((habit: IHabit) => (
        <HabitItem key={habit?.id} habit={habit} />
      ))}
    </section>
  );
};

export default HabitList;
