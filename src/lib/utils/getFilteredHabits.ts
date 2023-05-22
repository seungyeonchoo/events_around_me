import { IHabit } from '../types';
import { getConvertedDate } from './dateUtils';

export const getFilteredHabits = (
  habits: IHabit[],
  ongoning: boolean,
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
      if (ongoning)
        return habits?.filter((habit: IHabit) => {
          const isOngoing = new Date(habit?.end_date) > new Date();
          const isDueDate =
            getConvertedDate(new Date().toDateString()) === getConvertedDate(habit?.end_date);
          return isOngoing || isDueDate;
        });
      else return habits;
  }
};
