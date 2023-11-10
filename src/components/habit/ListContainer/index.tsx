import StatusItem from '../StatusItem';

export interface ListContainerProps {
  daily_status: boolean[];
  start: string;
}

const ListContainer = ({ daily_status, start }: ListContainerProps) => {
  return (
    <section className="mx-auto flex flex-wrap w-[80%] py-5 justify-start">
      {daily_status?.map((status: boolean, idx) => (
        <StatusItem key={idx} id={idx} status={status} start={start} />
      ))}
    </section>
  );
};

export default ListContainer;
