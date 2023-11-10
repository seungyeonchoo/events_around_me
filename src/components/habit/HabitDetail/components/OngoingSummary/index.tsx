import { IHabit } from '../../../../../../src/lib/types';
import { getCurrDate } from '../../../../../../src/lib/utils/dateUtils';
import AchievementSummary from './components/AchievementSummary';
import DateSummary from './components/DateSummary';

export interface OngoingSummaryProps {
  habit: IHabit;
}

const OngoingSummary = ({ habit }: OngoingSummaryProps) => {
  const curr_date = getCurrDate(habit?.start_date);
  const curr_date_num = (getCurrDate(habit?.start_date, true) as number) + 1;
  const total = habit?.daily_status;
  const completed = total?.filter((status: boolean) => status === true).length;
  const due_date = habit?.duration - curr_date_num;

  console.log(habit.duration);
  console.log(curr_date);

  return (
    <section className="h-[14rem] w-[20rem] flex flex-col justify-between max-sm:w-full max-sm:h-[5rem]">
      <DateSummary
        due_date={due_date + 1}
        curr_date={curr_date_num > habit?.duration ? '완료' : curr_date}
      />
      <AchievementSummary
        curr_date={curr_date_num as number}
        completed={completed}
        total_date={total?.length}
      />
    </section>
  );
};

export default OngoingSummary;
