import useInput from '@/src/lib/hooks/useInput';
import { DAY } from '@/src/lib/utils/dateUtils';
import DiaryCalendar from '../DiaryCalendar';
import DiaryNote from '../DiaryNote';

const DiaryTemplate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const day = DAY[new Date().getDay()];

  const { input, handleInput } = useInput({
    currDate: `${year}년 ${month}월 ${date}일 ${day}요일`,
  });

  const { input: backgroundColor, handleInput: handleBackgroundColor } = useInput({
    color: 'bg-gray-100',
  });

  return (
    <section className="relative flex justify-center sm:flex-col md:flex-col sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] py-[10%]">
      <DiaryCalendar handleCurrCalendar={handleInput} />
      <DiaryNote
        currDate={input.currDate}
        backgroundColor={backgroundColor.color}
        handleBackgroundColor={handleBackgroundColor}
      />
    </section>
  );
};

// textarea {
//     background-attachment: local;
//     background-image: linear-gradient(to right, white 10px, transparent 10px),
//       linear-gradient(to left, white 10px, transparent 10px),
//       repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
//     line-height: 30px;
//     padding: 8px 10px;
//   }

export default DiaryTemplate;
