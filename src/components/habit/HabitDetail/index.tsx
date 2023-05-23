import { IHabit } from '@/src/lib/types';
import BasicDetail from './components/BasicDetail';
import OngoingSummary from './components/OngoingSummary';

export interface HabitDetailProps {
  habit: IHabit;
}

const HabitDetail = ({ habit }: HabitDetailProps) => {
  return (
    <section className="mx-auto w-[90%] h-[20rem] flex max-sm:flex-col max-sm:h-[12rem] justify-evenly items-center border-b">
      <BasicDetail habit={habit} />
      <OngoingSummary habit={habit} />
    </section>
  );
};

export default HabitDetail;
