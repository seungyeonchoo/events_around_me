import Spinner from '@/public/svgs/icon _spinner.svg';
import { IHabit } from '@/src/lib/types';
import HabitItem from '../HabitItem';
export interface HabitContainerProps {
  habits: IHabit[];
  isLoading: boolean;
}

const HabitContainer = ({ habits, isLoading }: HabitContainerProps) => {
  if (isLoading)
    return (
      <section className="h-full w-[95%] mx-auto my-2 rounded-xl overflow-y-scroll py-3">
        <Spinner className="animate-spin-slow" />
      </section>
    );
  return (
    <section className="h-full w-[95%] bg-white mx-auto my-2 rounded-xl overflow-y-scroll py-3">
      {habits?.map((habit: IHabit) => (
        <HabitItem key={habit?.id} habit={habit} />
      ))}
    </section>
  );
};

export default HabitContainer;
