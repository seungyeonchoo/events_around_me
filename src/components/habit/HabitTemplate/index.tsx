import { IHabit } from '@/src/lib/types';
import { getCurrDate } from '../../../../src/lib/utils/dateUtils';
import CompleteButton from '../CompleteButton';
import HabitDetail from '../HabitDetail';
import ListContainer from '../ListContainer';

export interface HabitTemplateProps {
  habit: IHabit;
}

const HabitTemplate = ({ habit }: HabitTemplateProps) => {
  return (
    <section>
      <HabitDetail habit={habit} />
      <CompleteButton
        habit={habit}
        onClick={() =>
          console.log(habit?.daily_status[getCurrDate(new Date().toDateString()) as number])
        }
      />
      <ListContainer daily_status={habit?.daily_status} />
    </section>
  );
};

export default HabitTemplate;
