import { IDailyStatus } from '@/src/lib/types';
import { getConvertedDate } from '../../../../../../src/lib/utils/dateUtils';

export interface StatusItemProps extends IDailyStatus {}

const StatusItem = ({ id, date, status }: StatusItemProps) => {
  const disabled = date !== getConvertedDate(new Date().toDateString());

  const status_true =
    'border-primary bg-primary hover:border-primary_strong hover:bg-default_weak text-default_weak hover:text-primary';
  const status_false =
    'border-secondary bg-secondary text-default_weak hover:bg-default_weak hover:border-secondary hover:text-secondary';
  const common_styles =
    'm-auto relative absolute cursor-pointer w-[6rem] h-[6rem] rounded-full font-bold flex items-center justify-center border-2 shadow-lg max-sm:w-[3.5rem] max-sm:h-[3.5rem] text-[1.5rem] max-sm:text-sm p-1';
  const status_styles = status ? status_true : status_false;

  return (
    <label className={`${common_styles} ${status_styles}`}>
      <input type="checkbox" className="peer sr-only" checked={status} disabled={disabled} />
      <span className="absolute peer-hover:invisible">{id === 1 ? 'START' : `DAY ${id}`}</span>
      <span className="peer-hover:visible invisible text-center text-[1rem] max-sm:text-[0.3rem] max-sm:leading-3">
        {date}
      </span>
    </label>
  );
};

export default StatusItem;
