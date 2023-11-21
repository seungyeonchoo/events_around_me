import Achieve from '../Achieve';

export interface AchievementSummaryProps {
  completed: number;
  curr_date: number | '🔥';
  total_date: number;
}

const AchievementSummary = ({ completed, curr_date, total_date }: AchievementSummaryProps) => {
  return (
    <section className="mx-auto flex flex-col h-[6rem] justify-between max-sm:flex-row max-sm:justify-around max-sm:w-full max-sm:h-[2rem]">
      <Achieve title="today" complete_date={completed} total_date={curr_date} />
      <Achieve title="total" complete_date={completed} total_date={total_date} />
    </section>
  );
};

export default AchievementSummary;
