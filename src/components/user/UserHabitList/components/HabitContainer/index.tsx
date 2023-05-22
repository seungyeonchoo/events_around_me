import { IHabit } from '@/src/lib/types';
import HabitItem from '../HabitItem';

export interface HabitContainerProps {
  habits: IHabit[];
}

const HabitContainer = ({ habits }: HabitContainerProps) => {
  return (
    <section className="h-[23rem] w-[95%] bg-white mx-auto my-1 rounded-xl overflow-hidden">
      {habits?.map((habit: IHabit) => (
        <HabitItem key={habit?.id} habit={habit} />
      ))}
    </section>
  );
};

export default HabitContainer;
