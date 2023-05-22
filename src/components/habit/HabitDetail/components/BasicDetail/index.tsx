import { IHabit } from '@/src/lib/types';
import Text from '../../../../../../src/components/common/Text';

export interface BasicDetailProps {
  habit: IHabit;
}

const BasicDetail = ({ habit }: BasicDetailProps) => {
  return (
    <section className="m-auto w-[40rem] h-[15rem] py-5 flex flex-col items-center">
      <Text color="primary" size="4xl" text_tag="h1" bold>
        {habit?.title}
      </Text>
      <Text color="dark" size="xl" text_tag="p" bold>
        {habit?.start_date} ~ {habit?.end_date}
      </Text>
      <Text color="secondary" size="lg" text_tag="p" extra_style="my-10" italic>
        {habit?.description}
      </Text>
    </section>
  );
};

export default BasicDetail;
