import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import DiaryTemplate from '@/src/components/diary/DiaryTemplate';
import useInput from '@/src/lib/hooks/useInput';
import ApiService from '@/src/lib/service';
import { getTime } from '@/src/lib/utils/dateUtils';
import { id, token } from '@/src/lib/utils/storage';

export const getServerSideProps = async (context: NextPageContext) => {
  const userID = context?.query.id;

  return {
    props: {
      userID,
    },
  };
};

const Diary = ({ userID }: any) => {
  const API = new ApiService();
  const { year, month, date, day } = getTime();
  const router = useRouter();
  const initialDate = `${year}년 ${month}월 ${date}일 ${day}요일`;

  const { data: diaryData } = useQuery(
    ['diary', { user: userID }],
    () => API.get(`/diaries`, { userId: userID }),
    { enabled: +userID === id },
  );

  const { input: currDate, handleInput: handleCurrDate } = useInput({ currDate: initialDate });

  useEffect(() => {
    if (!token) router.push('/');
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
