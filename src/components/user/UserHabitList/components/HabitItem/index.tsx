import { IHabit } from '../../../../../../src/lib/types';
import { getCurrDate } from '../../../../../../src/lib/utils/dateUtils';

import CompletedStamp from './components/CompletedStamp';
import DetailButton from './components/DetailButton';
import DueDate from './components/DueDate';
import HabitDate from './components/HabitDate';
import HabitTitle from './components/HabitTitle';

export interface HabitItemProps {
  habit: IHabit;
}

const HabitItem = ({ habit }: HabitItemProps) => {
  const currDate = getCurrDate(habit?.start_date, true) as number;

  return (
    <article className="flex items-center justify-around border border-primary w-[90%] h-[3rem] m-auto rounded-xl shadow-md px-3 my-2 relative">
      <DueDate duration={habit?.duration} start_date={habit?.start_date} />
      <HabitDate start_date={habit?.start_date} end_date={habit?.end_date} />
      <HabitTitle title={habit?.title} />
      <DetailButton id={habit?.id} />
      {habit?.daily_status[currDate] === true && <CompletedStamp />}
    </article>
  );
};

export default HabitItem;
