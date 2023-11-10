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
      day,
      date: idx + 1,
      detail: `${currYear}-${currMonth}-${idx + 1}`,
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
      day: i,
      date: prevDate,
      detail: `${prevYear}-${prevMonth}-${prevDate}`,
    });
  }

  for (let i = lastDay + 1, j = 0; i < 7; i++, j++) {
    const nextDateTime = new Date(nextFullDate).setDate(new Date(currFullDate).getDate() + j);
    const nextDate = new Date(nextDateTime).getDate();

    nextDatesList.push({
      day: i,
      date: nextDate,
      detail: `${nextYear}-${nextMonth}-${nextDate}`,
    });
  }

  const calendar = [...prevDatesList, ...currDateList, ...nextDatesList];

  return { calendar };
};

export default useGetCalendar;
