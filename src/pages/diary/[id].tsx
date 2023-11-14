import DiaryTemplate from '@/src/components/diary/DiaryTemplate';
import useInput from '@/src/lib/hooks/useInput';
import ApiService from '@/src/lib/service';
import { getTime } from '@/src/lib/utils/dateUtils';
import { useQuery } from 'react-query';

const API = new ApiService();
const { year, month, date, day } = getTime();

const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

const Diary = () => {
  // const router = useRouter();
  const initialDate = `${year}년 ${month}월 ${date}일 ${day}요일`;

  const { data: diaryData, isLoading } = useQuery(['diary', { user: id }], () =>
    API.get(`/diaries`, { userId: id }),
  );

  const { input: currDate, handleInput: handleCurrDate } = useInput({ currDate: initialDate });

  if (diaryData === undefined || isLoading) return <div>loading</div>;

  return (
    <DiaryTemplate
      currDate={currDate.currDate}
      handleCurrentDate={handleCurrDate}
      diaries={diaryData}
    />
  );
};

export default Diary;
