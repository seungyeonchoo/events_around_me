import { IHabit } from '@/src/lib/types';
import { getCurrDate, getRemainDate } from '../../../../../../src/lib/utils/dateUtils';
import DateSummary from './components/DateSummary';

export interface OngoingSummaryProps {
  habit: IHabit;
}

const OngoingSummary = ({ habit }: OngoingSummaryProps) => {
  const curr_date = getCurrDate(habit?.start_date);
  const due_date = getRemainDate(habit?.end_date);

  return (
    <section className="m-auto h-[15rem] py-5 w-[20rem] flex max-sm:w-full">
      <DateSummary due_date={due_date} curr_date={curr_date} />
    </section>
  );
};

export default OngoingSummary;
