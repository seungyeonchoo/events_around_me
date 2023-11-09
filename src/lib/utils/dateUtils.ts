const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAY = ['일', '월', '화', '수', '목', '금', '토'];

export const getRemainDate = (date: string) => {
  const curr = new Date().getTime();
  const end = new Date(date).getTime();
  const remain = Math.ceil((end - curr) / (1000 * 60 * 60 * 24));

  return remain === 0 ? 'DUE' : remain < 0 ? 'END' : remain;
};

export const getCurrDate = (start_date: string, numberOnly?: boolean) => {
  const timeDiff = new Date().getTime() - new Date(start_date).getTime();
  const curr = Math.floor(timeDiff / (1000 * 24 * 60 * 60));

  if (numberOnly) return curr;

  return curr === 0 ? '🔥' : curr + 1;
};

export const getTime = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const day = DAY[new Date().getDay()];
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  return { year, month, date, day, hour, minutes };
};

export const getEndDate = (duration: number) => {
  return new Date(new Date().setDate(new Date().getDate() + duration)).toDateString();
};

export const getConvertedDate = (date: string, day?: boolean | undefined) => {
  const getFullYear = new Date(date).getFullYear();
  const getMonth = MONTH[new Date(date).getMonth()];
  const getDate =
    new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate();
  const getDay = DAY[new Date(date).getDay()];

  if (day) return `${getDate}. ${getMonth}. ${getFullYear} (${getDay})`;
  else return `${getDate}. ${getMonth}. ${getFullYear}`;
};
