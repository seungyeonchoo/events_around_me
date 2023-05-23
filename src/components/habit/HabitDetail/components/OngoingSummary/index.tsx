import { IHabit } from '../../../../../../src/lib/types';
import { getCurrDate, getRemainDate } from '../../../../../../src/lib/utils/dateUtils';
import AchievementSummary from './components/AchievementSummary';
import DateSummary from './components/DateSummary';

export interface OngoingSummaryProps {
  habit: IHabit;
}

const OngoingSummary = ({ habit }: OngoingSummaryProps) => {
  const curr_date = getCurrDate(habit?.start_date);
  const curr_date_num = getCurrDate(habit?.start_date, true);
  const total = Object.values(habit?.daily_status);
  const completed = total.filter(el => el === true).length;
  const due_date = getRemainDate(habit?.end_date);

  return (
    <section className="h-[14rem] w-[20rem] flex flex-col justify-between max-sm:w-full max-sm:h-[5rem]">
      <DateSummary due_date={due_date} curr_date={curr_date} />
      <AchievementSummary
        curr_date={curr_date_num as number}
        completed={completed}
        total_date={total.length}
      />
    </section>
  );
};

export default OngoingSummary;
