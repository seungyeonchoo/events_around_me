import { IDailyStatus } from '@/src/lib/types';
import StatusItem from '../StatusItem';

export interface ListContainerProps {
  daily_status: IDailyStatus[];
}

const ListContainer = ({ daily_status }: ListContainerProps) => {
  return (
    <section className="mx-auto flex flex-wrap w-[80%] py-5 justify-start">
      {daily_status?.map((status: IDailyStatus) => (
        <StatusItem
          key={status?.id}
          id={status?.id}
          date={status?.date}
          status={status?.status}
          end={daily_status?.length}
        />
      ))}
    </section>
  );
};

export default ListContainer;
