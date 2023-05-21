import { getRemainDate } from '../../../lib/dateUtils';

export interface DueDateProps {
  due_date: string;
}

const DueDate = ({ due_date }: DueDateProps) => {
  return (
    <div className="h-[2rem] w-[2rem] bg-primary rounded-full text-sm font-bold text-center text-default leading-8">
      {getRemainDate(due_date)}
    </div>
  );
};

export default DueDate;
