import { IHabit } from '@/src/lib/types';
import HabitItem from '../HabitItem';

export interface HabitContainerProps {
  habits: IHabit[];
}

const HabitContainer = ({ habits }: HabitContainerProps) => {
  return (
    <section className="h-full w-[95%] bg-white mx-auto my-2 rounded-xl overflow-hidden py-3">
      {habits?.map((habit: IHabit) => (
        <HabitItem key={habit?.id} habit={habit} />
      ))}
    </section>
  );
};

export default HabitContainer;
