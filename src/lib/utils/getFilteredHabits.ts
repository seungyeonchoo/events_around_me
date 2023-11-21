import { IHabit } from '../types';
import { getCurrDate } from './dateUtils';

export const getFilteredHabits = (
  habits: IHabit[],
  ongoning: boolean,
  status: 'total' | 'completed' | 'not_yet',
) => {
  const ongoing_today = habits?.filter((habit: IHabit) => {
    const curr_date = getCurrDate(habit?.start_date, true) as number;
    return curr_date >= 0 && curr_date <= habit?.daily_status?.length;
  });

  const completed_today = ongoing_today?.filter((habit: IHabit) => {
    const curr_date = getCurrDate(habit?.start_date, true) as number;
    return habit?.daily_status[curr_date];
  });

  const uncompleted_today = ongoing_today?.filter((habit: IHabit) => {
    const curr_date = getCurrDate(habit?.start_date, true) as number;
    return !habit?.daily_status[curr_date];
  });

  switch (status) {
    case 'completed':
      return completed_today;
    case 'not_yet':
      return uncompleted_today;
    case 'total':
      if (ongoning) return ongoing_today;
      else return habits;
  }
};
