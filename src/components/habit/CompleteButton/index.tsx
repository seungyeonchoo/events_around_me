import { IHabit } from '@/src/lib/types';
import { getConvertedDate, getCurrDate } from '../../../../src/lib/utils/dateUtils';
import Button from '../../common/Button';

export interface CompleteButtonProps {
  habit: IHabit;
  onClick: () => void;
}

const CompleteButton = ({ onClick, habit }: CompleteButtonProps) => {
  const today = getConvertedDate(new Date().toDateString());
  const curr_date = Math.min(
    getCurrDate(habit?.start_date, true) as number,
    habit?.daily_status?.length,
  );
  const curr_status = habit?.daily_status[curr_date];

  return (
    <section className="w-[80%] m-auto">
      <Button
        color="primary"
        size="full"
        onClick={onClick}
        extra_style="my-5 text-xs"
        rounded
        disabled={curr_status}
      >
        {curr_status ? 'Completed Today 👍 - ' : 'Click to Complete Today 🔥 - '}
        {today}
      </Button>
    </section>
  );
};

export default CompleteButton;
