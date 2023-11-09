import Text from '@/src/components/common/Text';
import useGetLocation from '@/src/lib/hooks/useGetLocation';
import { getTime } from '@/src/lib/utils/dateUtils';
import { useEffect, useState } from 'react';

const CurrentInfo = () => {
  const [time, setTime] = useState(getTime());
  const { location } = useGetLocation();

  useEffect(() => {
    // setInterval(() => setTime(getTime()), 1000);
  }, []);

  return (
    // <Text
    //   size="2xl"
    //   text_tag="p"
    //   color="secondary"
    //   extra_style="text-center mt-5 max-sm:text-2xl"
    //   bold
    // >
    //   {getConvertedDate(curr, true)}
    // </Text>
    <div className="flex mt-[0.5rem] justify-between">
      <div className="w-[48%] h-[7rem] bg-primary_weak rounded-[0.75rem] flex flex-col justify-center items-end px-[1rem]">
        <Text text_tag="p" size="sm" bold color="default">
          {time.year}년
        </Text>
        <Text text_tag="p" size="sm" bold color="default">
          {time.month}월 {time.date}일 {time.day}요일
        </Text>
        <p className="font-bold text-[1.9rem] w-full text-yellow-300 text-center">
          {time.hour}시 {time.minutes}분
        </p>
      </div>
      <div className="w-[48%] h-[7rem] bg-primary_weak rounded-[0.75rem]">{}</div>
    </div>
  );
};

export default CurrentInfo;
