import { IHabit } from '@/src/lib/types';
import Text from '../../../../../../src/components/common/Text';

export interface BasicDetailProps {
  habit: IHabit;
}

const BasicDetail = ({ habit }: BasicDetailProps) => {
  return (
    <section className="m-auto h-[15rem] py-5 flex flex-col items-center w-[40rem] max-sm:w-full">
      <Text
        color="default"
        size="3xl"
        text_tag="h1"
        bold
        extra_style="p-2 bg-primary max-sm:text-[1rem] w-full text-center"
      >
        {habit?.title}
      </Text>
      <Text color="dark" size="xl" text_tag="p" bold extra_style="max-sm:text-[0.8rem]">
        {habit?.start_date} ~ {habit?.end_date}
      </Text>
      <Text
        color="secondary"
        size="lg"
        text_tag="p"
        extra_style="my-10 max-sm:my-3 max-sm:text-[0.8rem]"
        italic
      >
        {habit?.description}
      </Text>
    </section>
  );
};

export default BasicDetail;
