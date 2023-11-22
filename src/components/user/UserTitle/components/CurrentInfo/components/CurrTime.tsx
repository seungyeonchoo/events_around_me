import Text from '@/src/components/common/Text';
import { getTime } from '@/src/lib/utils/dateUtils';
import { useEffect, useState } from 'react';

const CurrTime = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, []);

  return (
    <section className="w-[48%] h-[7rem] bg-primary_weak rounded-[0.75rem] flex flex-col justify-center items-end px-[1rem]">
      <Text text_tag="p" size="sm" bold color="default">
        {time.year}년
      </Text>
      <Text text_tag="p" size="sm" bold color="default">
        {time.month}월 {time.date}일 {time.day}요일
      </Text>
      <p className="font-bold text-[1.75rem] w-full text-yellow-300 text-center">
        {time.hour}시 {time.minutes}분
      </p>
    </section>
  );
};

export default CurrTime;
