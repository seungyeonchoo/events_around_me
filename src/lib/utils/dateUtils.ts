export const DAY = ['일', '월', '화', '수', '목', '금', '토'];

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

export const getEndDate = (duration: number, start_date?: string) => {
  const start = start_date ? new Date(start_date).getDate() : new Date().getDate();
  return new Date(new Date().setDate(start + +duration)).toDateString();
};

export const getConvertedDate = (date: string, day?: boolean | undefined) => {
  const getFullYear = new Date(date).getFullYear();
  const getMonth = new Date(date).getMonth() + 1;
  const getDate =
    new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate();
  const getDay = DAY[new Date(date).getDay()];

  if (day) return `${getFullYear}. ${getMonth}. ${getDate}. ('${getDay}')`;
  else return `${getFullYear}. ${getMonth}. ${getDate}`;
};
