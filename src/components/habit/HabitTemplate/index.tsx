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
    <section>
      <HabitDetail habit={habit} handleDelete={handleDelete} />
      <CompleteButton habit={habit} onClick={handleComplete} />
      <ListContainer daily_status={habit?.daily_status} />
    </section>
  );
};

export default HabitTemplate;
