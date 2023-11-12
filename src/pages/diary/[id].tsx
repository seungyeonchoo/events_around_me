import DiaryTemplate from '@/src/components/diary/DiaryTemplate';
import useInput from '@/src/lib/hooks/useInput';
import ApiService from '@/src/lib/service';
import { IDiary } from '@/src/lib/types';
import { useQuery, useQueryClient } from 'react-query';

const API = new ApiService();

const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

const initialDiary: IDiary = {
  userId: id,
  date: '',
  content: '',
  color: '',
};

console.log(initialDiary);

const Diary = () => {
  // const router = useRouter();
  const queryClient = useQueryClient();
  const { input: diaryInput, handleInput: handleDiaryInput, resetInput } = useInput(initialDiary);

  const { data: diaryData } = useQuery(['diary', { user: id }], () =>
    API.get(`/diaries`, { userId: 1 }),
  );

  return <DiaryTemplate />;
};

export default Diary;
