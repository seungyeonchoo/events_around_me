import { getConvertedDate } from './dateUtils';
import getDateList from './getDateList';

export const mockHabit_1 = {
  id: 1,
  start_date: '2022-06-23',
  end_date: '2023-04-21',
  userId: 1,
  title: 'this is first habit...',
  description: 'this is first description',
  daily_status: getDateList('2022-06-23', '2023-04-21'),
};

export const mockHabit_2 = {
  id: 2,
  start_date: '2023-04-23',
  end_date: new Date().toDateString(),
  userId: 1,
  title: 'this is second habit...',
  description: 'this is second description',
  daily_status: getDateList('2023-04-23', new Date().toDateString()),
};

export const mockHabit_3 = {
  id: 3,
  start_date: new Date().toDateString(),
  end_date: new Date(new Date().setDate(new Date().getDate() + 30)).toDateString(),
  userId: 1,
  title: 'this is 3rd habit...',
  description: 'this is 3rd description',
  daily_status: getDateList(
    new Date().toDateString(),
    new Date(new Date().setDate(new Date().getDate() + 30)).toDateString(),
  ),
};

mockHabit_3.daily_status[getConvertedDate(new Date().toDateString())] = true;

export const mockUser = {
  id: 1,
  email: 'user@email.com',
  password: '12345678',
  firstName: 'Seungyeon',
  lastName: 'Choo',
  habits: [mockHabit_1, mockHabit_2, mockHabit_3],
};
