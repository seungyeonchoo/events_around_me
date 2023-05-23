import Calendar from '../Calendar';

export interface DateSummaryProps {
  curr_date: number | '🔥';
  due_date: number | 'DUE' | 'END';
}

const DateSummary = ({ curr_date, due_date }: DateSummaryProps) => {
  return (
    <section className="mx-auto flex w-[18rem] justify-between max-sm:justify-around max-sm:w-full">
      <Calendar title="day" date={curr_date} />
      <Calendar title="d-day" date={due_date} />
    </section>
  );
};

export default DateSummary;
