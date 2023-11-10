export interface StatusItemProps {
  id: number;
  start: string;
  status: boolean;
}

const StatusItem = ({ id, start, status }: StatusItemProps) => {
  const currDate = new Date(new Date(start).setDate(new Date(start).getDate() + id)).toDateString();
  const isCurrDate = currDate === new Date().toDateString();

  const status_true = 'border-primary bg-primary text-default';

  const status_false = 'border-secondary bg-secondary hover:bg-default_weak text-secondary';

  const status_styles = status ? status_true : status_false;

  return (
    <div
      className={`${status_styles} relative peer rounded-full w-[2rem] h-[2rem] border m-[0.1rem] text-xs font-bold flex justify-center items-center`}
    >
      {id + 1}
      {/* {id === end && <span className="italic text-dark absolute -bottom-5 left-0">done!</span>} */}
      {id + 1 === 1 && (
        <span className="italic absolute -top-5 left-0 text-dark rounded-full">start!</span>
      )}
      {isCurrDate && (
        <span className="absolute w-[2rem] h-[2rem] border-4 border-yellow-500 rounded-full"></span>
      )}
    </div>
  );
};

export default StatusItem;
