import { DAY } from '../utils/dateUtils';

const useGetCalendar = (currYear: number, currMonth: number) => {
  const nextYear = currMonth === 12 ? currYear + 1 : currYear;
  const nextMonth = currMonth === 12 ? 1 : currMonth + 1;

  const prevYear = currMonth === 1 ? currYear - 1 : currYear;
  const prevMonth = currMonth === 1 ? 12 : currMonth - 1;

  const currFullDate = new Date(`${currYear}-${currMonth}`).getTime();
  const nextFullDate = new Date(`${nextYear}-${nextMonth}`).getTime();

  const firstDay = new Date(`${currYear}-${currMonth}`).getDay();
  const lastDay = new Date(
    new Date(nextFullDate).setDate(new Date(nextFullDate).getDate() - 1),
  ).getDay();

  const length = (nextFullDate - currFullDate) / 86400000;

  const dateLength = length % 1 > 0.5 ? Math.ceil(length) : Math.floor(length);

  const currDateList = Array.from({ length: dateLength }, (_, idx) => {
    const day = new Date(`${currYear}-${currMonth}-${idx + 1}`).getDay();
    return {
      year: currYear,
      month: currMonth,
      day: DAY[day],
      date: idx + 1,
      detail: `${currYear}년 ${currMonth}월 ${idx + 1}일 ${DAY[day]}요일`,
    };
  });

  const prevDatesList = [];
  const nextDatesList = [];

  for (let i = 0; i < firstDay; i++) {
    const prevDateTime = new Date(currFullDate).setDate(
      new Date(currFullDate).getDate() - firstDay + i,
    );
    const prevDate = new Date(prevDateTime).getDate();

    prevDatesList.push({
      year: prevYear,
      month: prevMonth,
      day: DAY[i],
      date: prevDate,
      detail: `${prevYear}년 ${prevMonth}월 ${prevDate}일 ${DAY[i]}요일`,
    });
  }

  for (let i = lastDay + 1, j = 0; i < 7; i++, j++) {
    const nextDateTime = new Date(nextFullDate).setDate(new Date(currFullDate).getDate() + j);
    const nextDate = new Date(nextDateTime).getDate();

    nextDatesList.push({
      year: nextYear,
      month: nextMonth,
      day: DAY[i],
      date: nextDate,
      detail: `${nextYear}년 ${nextMonth}월 ${nextDate}일 ${DAY[i]}요일`,
    });
  }

  const calendar = [...prevDatesList, ...currDateList, ...nextDatesList];

  return { calendar, prevYear, prevMonth, nextYear, nextMonth };
};

export default useGetCalendar;
