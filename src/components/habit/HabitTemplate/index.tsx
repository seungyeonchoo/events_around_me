import { IHabit } from '@/src/lib/types';
import CompleteButton from '../CompleteButton';
import HabitDetail from '../HabitDetail';
import ListContainer from '../ListContainer';

export interface HabitTemplateProps {
  habit: IHabit;
  handleDelete: () => void;
  handleComplete: () => void;
}

const HabitTemplate = ({ habit, handleComplete, handleDelete }: HabitTemplateProps) => {
  return (
    <section className="relative flex flex-col justify-center sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] sm:py-0 md:py-0 pb-[5%]">
      <HabitDetail habit={habit} handleDelete={handleDelete} />
      <CompleteButton habit={habit} onClick={handleComplete} />
      <ListContainer daily_status={habit?.daily_status} start={habit?.start_date} />
    </section>
  );
};

export default HabitTemplate;
