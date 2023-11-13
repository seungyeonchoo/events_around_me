import DiaryTemplate from '@/src/components/diary/DiaryTemplate';
import useInput from '@/src/lib/hooks/useInput';
import ApiService from '@/src/lib/service';
import { IDiary } from '@/src/lib/types';
import { getTime } from '@/src/lib/utils/dateUtils';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const API = new ApiService();
const { year, month, date, day } = getTime();

const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

const Diary = () => {
  // const router = useRouter();
  const queryClient = useQueryClient();
  const initialDate = `${year}년 ${month}월 ${date}일 ${day}요일`;

  const { data: diaryData, isLoading } = useQuery(['diary', { user: id }], () =>
    API.get(`/diaries`, { userId: id }),
  );

  const initialDiary = diaryData?.filter((diary: IDiary) => diary.date === initialDate)[0];

  const initialDiaryInput = {
    date: initialDate,
    content: initialDiary?.content || '',
    color: initialDiary?.color || 'bg-gray-100',
  };

  const {
    input: diaryInput,
    handleInput: handleDiaryInput,
    setInput,
  } = useInput(initialDiaryInput);

  const { mutate: handlePostDiary } = useMutation(
    () =>
      API.post('/diaries', {
        ...diaryInput,
        userId: id,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );

  useEffect(() => {
    const selectedDiary = diaryData?.filter((diary: IDiary) => diary.date === diaryInput.date)[0];
    if (selectedDiary)
      setInput({
        date: selectedDiary?.date,
        content: selectedDiary?.content,
        color: selectedDiary?.color,
      });
    else setInput({ ...diaryInput, content: '' });
  }, [diaryInput.date]);

  if (diaryData === undefined || isLoading) return <div>loading</div>;

  return (
    <DiaryTemplate
      diaryInput={diaryInput}
      handleDiaryInput={handleDiaryInput}
      diaries={diaryData}
      handlePostDiary={handlePostDiary}
    />
  );
};

export default Diary;
