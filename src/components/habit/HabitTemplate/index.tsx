import { IHabit } from '@/src/lib/types';
import HabitDetail from '../HabitDetail';
import ListContainer from '../ListContainer';

export interface HabitTemplateProps {
  habit: IHabit;
}

const HabitTemplate = ({ habit }: HabitTemplateProps) => {
  return (
    <section>
      <HabitDetail habit={habit} />
      <ListContainer daily_status={habit?.daily_status} />
    </section>
  );
};

export default HabitTemplate;
