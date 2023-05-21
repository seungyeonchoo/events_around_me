import { IHabit } from '@/src/types';
import { getConvertedDate } from '../../../lib/dateUtils';
import HabitItem from '../HabitItem';

export interface HabitListProps {
  habits: IHabit[];
  finishedToggle: boolean;
  status: 'total' | 'completed' | 'not_yet';
}

const getHabits = (
  habits: IHabit[],
  finishedToggle: boolean,
  status: 'total' | 'completed' | 'not_yet',
) => {
  switch (status) {
    case 'completed':
      return habits?.filter(
        (habit: IHabit) =>
          habit?.daily_status[getConvertedDate(new Date().toDateString())] === true,
      );
    case 'not_yet':
      return habits?.filter(
        (habit: IHabit) =>
          habit?.daily_status[getConvertedDate(new Date().toDateString())] === false,
      );
    case 'total':
      if (finishedToggle)
        return habits?.filter((habit: IHabit) => {
          const isOngoing = new Date(habit?.end_date) > new Date();
          const isDueDate =
            getConvertedDate(new Date().toDateString()) === getConvertedDate(habit?.end_date);
          return isOngoing || isDueDate;
        });
      else return habits;
  }
};

const HabitList = ({ habits, finishedToggle, status }: HabitListProps) => {
  const filteredHabit = getHabits(habits, finishedToggle, status);

  return (
    <section className="h-[23rem] w-[95%] bg-white mx-auto my-1 rounded-xl overflow-hidden">
      {filteredHabit?.map((habit: IHabit) => (
        <HabitItem key={habit?.id} habit={habit} />
      ))}
    </section>
  );
};

export default HabitList;
