import Button from '@/src/components/common/Button';
import { IHabit } from '@/src/lib/types';
import Text from '../../../../../../src/components/common/Text';
import { getConvertedDate } from '../../../../../../src/lib/utils/dateUtils';

export interface BasicDetailProps {
  habit: IHabit;
  handleDelete: () => void;
}

const BasicDetail = ({ habit, handleDelete }: BasicDetailProps) => {
  const start_date = getConvertedDate(habit?.start_date);
  const end_date = getConvertedDate(habit?.end_date);

  return (
    <section className="h-[14rem] relative flex flex-col items-center w-[45%] sm:h-[4rem] sm:w-full max-sm:h-[4.5rem] shadow-lg max-sm:border-none max-sm:shadow-none overflow-hidden">
      <Button
        onClick={handleDelete}
        size="xs"
        color="primary"
        rounded
        extra_style="absolute right-3 top-1.5"
      >
        삭제
      </Button>
      <Button
        link={`/user/${habit?.userId}`}
        size="xs"
        color="primary"
        rounded
        extra_style="absolute left-3 top-1.5"
      >
        뒤로
      </Button>
      <Text
        color="default"
        size="xl"
        text_tag="h1"
        bold
        extra_style="py-2 bg-primary max-sm:text-[1rem] w-full text-center"
      >
        {habit?.title}
      </Text>
      <Text
        color="dark"
        size="xs"
        text_tag="p"
        bold
        extra_style="border-b w-full text-center bg-default_weak p-1"
      >
        {start_date} ~ {end_date}
      </Text>
      <Text color="secondary" size="sm" text_tag="p" extra_style="p-2 sm:hidden" italic>
        {habit?.description}
      </Text>
    </section>
  );
};

export default BasicDetail;
