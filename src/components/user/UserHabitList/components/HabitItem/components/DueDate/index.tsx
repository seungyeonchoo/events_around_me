import { getRemainDate } from '../../../../../../../../src/lib/utils/dateUtils';

export interface DueDateProps {
  due_date: string;
}

const DueDate = ({ due_date }: DueDateProps) => {
  const color =
    getRemainDate(due_date) === 'END'
      ? 'bg-dark'
      : getRemainDate(due_date) === 'DUE'
      ? 'bg-yellow-500'
      : 'bg-primary';

  return (
    <div
      className={`${color} h-[2rem] w-[2rem] rounded-full text-xs font-bold text-center text-default leading-8`}
    >
      {getRemainDate(due_date)}
    </div>
  );
};

export default DueDate;
