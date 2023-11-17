import DiaryTemplate from '@/src/components/diary/DiaryTemplate';
import useInput from '@/src/lib/hooks/useInput';
import ApiService from '@/src/lib/service';
import { getTime } from '@/src/lib/utils/dateUtils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

const API = new ApiService();
const { year, month, date, day } = getTime();

export const getServerSideProps = async (context: any) => {
  const userID = context?.query.id;

  return {
    props: {
      userID,
    },
  };
};

const Diary = ({ userID }: any) => {
  const id =
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string)?.id : null;
  const router = useRouter();
  const initialDate = `${year}년 ${month}월 ${date}일 ${day}요일`;

  const { data: diaryData, isLoading } = useQuery(
    ['diary', { user: userID }],
    () => API.get(`/diaries`, { userId: userID }),
    { enabled: +userID === id },
  );

  console.log(diaryData);
  const { input: currDate, handleInput: handleCurrDate } = useInput({ currDate: initialDate });

  useEffect(() => {
    if (+userID !== id) router.push(`/diary/${id}`);
  }, []);

  return (
    <>
      <DiaryTemplate
        currDate={currDate.currDate}
        handleCurrentDate={handleCurrDate}
        diaries={diaryData}
        userID={+userID}
      />
    </>
  );
};

export default Diary;
