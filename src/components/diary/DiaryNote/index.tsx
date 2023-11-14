import useInput from '@/src/lib/hooks/useInput';
import useToggle from '@/src/lib/hooks/useToggle';
import ApiService from '@/src/lib/service';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import DiaryNoteHeader from './components/DiaryNoteHeader';
import DiaryNoteTextArea from './components/DiaryNoteTextArea';
import DiaryNoteToolBar from './components/DiaryNoteToolBar';

const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string).id : null;

interface DiaryNoteProps {
  currDate: string;
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

const API = new ApiService();

const DiaryNote = ({ currDate }: DiaryNoteProps) => {
  const { toggle: editToggle, handleToggle: handleEditToggle } = useToggle();
  const [year, month, date, day] = currDate.split(' ');

  const initialDiaryInput = {
    id: null,
    userId: id,
    date: currDate,
    content: '',
    color: 'bg-gray-100',
  };

  const { input, handleInput, setInput } = useInput(initialDiaryInput);

  const { mutate: handlePost } = useMutation(() => API.post('diaries', input));
  const { mutate: handlePatch } = useMutation(() => API.patch(`diaries/${input?.id}`, input));

  useEffect(() => {
    getDiary(currDate)
      .then(diary => {
        if (diary[0]) setInput(diary[0]);
        else setInput(initialDiaryInput);
      })
      .catch(err => console.log(err));
  }, [currDate]);

  console.log(input);

  return (
    <section
      className={`p-[1.5rem] h-[30rem] w-[40rem] sm:w-[90%] md:w-[90%] flex flex-col justify-between shadow-md rounded-xl overflow-hidden relative ${input.color}`}
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
        handlePostDiary={input.id ? handlePatch : handlePost}
      />
    </section>
  );
};

export default DiaryNote;
