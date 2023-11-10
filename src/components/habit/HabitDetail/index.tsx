import { IHabit } from '@/src/lib/types';
import BasicDetail from './components/BasicDetail';
import OngoingSummary from './components/OngoingSummary';

export interface HabitDetailProps {
  habit: IHabit;
  handleDelete: () => void;
}

const HabitDetail = ({ habit, handleDelete }: HabitDetailProps) => {
  return (
    <section className="mx-auto w-[90%] h-[20rem] flex max-sm:flex-col max-sm:h-[12rem] sm:flex-col justify-evenly items-center border-b">
      <BasicDetail habit={habit} handleDelete={handleDelete} />
      <OngoingSummary habit={habit} />
    </section>
  );
};

export default HabitDetail;
