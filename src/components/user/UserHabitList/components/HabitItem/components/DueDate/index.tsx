import { getCurrDate } from '../../../../../../../../src/lib/utils/dateUtils';

export interface DueDateProps {
  start_date: string;
  duration: number;
}

const DueDate = ({ duration, start_date }: DueDateProps) => {
  const curr_date = duration - (getCurrDate(start_date, true) as number);
  const color = curr_date < 0 ? 'bg-dark' : curr_date === 0 ? 'bg-yellow-500' : 'bg-primary';

  return (
    <div
      className={`${color} h-[2rem] w-[2rem] rounded-full text-xs font-bold text-center text-default leading-8`}
    >
      {curr_date < 0 ? 'END' : curr_date === 0 ? 'DUE' : curr_date}
    </div>
  );
};

export default DueDate;
