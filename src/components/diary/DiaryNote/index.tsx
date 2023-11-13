import useInput from '@/src/lib/hooks/useInput';
import useToggle from '@/src/lib/hooks/useToggle';
import ApiService from '@/src/lib/service';
import { ChangeEvent, useEffect } from 'react';
import { useQuery } from 'react-query';
import DiaryNoteHeader from './components/DiaryNoteHeader';
import DiaryNoteTextArea from './components/DiaryNoteTextArea';
import DiaryNoteToolBar from './components/DiaryNoteToolBar';

const API = new ApiService();
const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

interface DiaryNoteProps {
  currDate: string;
  content: string;
  backgroundColor: string;
  // eslint-disable-next-line no-unused-vars
  handleDiaryInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlePostDiary: () => void;
}

const getDiary = async (date: string) => {
  const params = {
    userId: id,
    date: date,
  };
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`http://localhost:3000/diaries?${qs}`);

  return await res.json();
};

const DiaryNote = ({
  content,
  currDate,
  backgroundColor,
  handleDiaryInput,
  handlePostDiary,
}: DiaryNoteProps) => {
  const { toggle: editToggle, handleToggle: handleEditToggle } = useToggle();
  const [year, month, date, day] = currDate.split(' ');

  const { data: diary, isLoading } = useQuery(['diary', { user: id, date: currDate }], () =>
    API.get('/diaries/', { userId: id, date: currDate }),
  );

  const d = { ...diary }[0];

  const initialDiaryInput = {
    userId: id,
    date: currDate,
    content: '',
    color: 'bg-gray-100',
  };

  const { input, handleInput, setInput } = useInput(initialDiaryInput);

  useEffect(() => {
    getDiary(currDate).then(diary => {
      if (diary[0] !== undefined) setInput(diary[0]);
      else setInput(initialDiaryInput);
    });
  }, [input.date]);

  console.log(input);

  if (isLoading)
    return (
      <section
        className={`p-[1.5rem] h-[30rem] w-[40rem] sm:w-[90%] md:w-[90%] flex flex-col justify-between shadow-md rounded-xl overflow-hidden relative ${backgroundColor}`}
      >
        loading...
      </section>
    );

  return (
    <section
      className={`p-[1.5rem] h-[30rem] w-[40rem] sm:w-[90%] md:w-[90%] flex flex-col justify-between shadow-md rounded-xl overflow-hidden relative ${backgroundColor}`}
    >
      <DiaryNoteHeader year={year} month={month} date={date} day={day} />
      <DiaryNoteTextArea
        name="content"
        value={input.content}
        onChange={handleInput}
        disabled={!editToggle}
        placeholder={editToggle ? '내용을 입력해주세요.' : ''}
      />
      <DiaryNoteToolBar
        editToggle={editToggle}
        backgroundColor={input.color}
        handleBackgroundColor={handleInput}
        handleEditToggle={handleEditToggle}
        handlePostDiary={handlePostDiary}
      />
    </section>
  );
};

export default DiaryNote;
