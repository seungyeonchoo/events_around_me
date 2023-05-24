import { IDailyStatus } from '@/src/lib/types';
import StatusItem from '../StatusItem';

export interface ListContainerProps {
  daily_status: IDailyStatus[];
}

const ListContainer = ({ daily_status }: ListContainerProps) => {
  return (
    <section className="grid grid-cols-4 my-10 gap-y-10 max-sm:grid-cols-3 max-sm:gap-y-5">
      {daily_status?.map((status: IDailyStatus) => (
        <StatusItem key={status?.id} id={status?.id} date={status?.date} status={status?.status} />
      ))}
    </section>
  );
};

export default ListContainer;
