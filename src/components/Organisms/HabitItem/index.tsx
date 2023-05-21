import { IHabit } from '@/src/types';
import Button from '../../Atoms/Button';
import DueDate from '../../Atoms/DueDate';
import Text from '../../Atoms/Text';
import HabitDate from '../../Molecules/HabitDate';

export interface HabitItemProps {
  habit: IHabit;
}

const HabitItem = ({ habit }: HabitItemProps) => {
  return (
    <article className="flex items-center justify-around border border-primary w-[90%] h-[3rem] m-auto rounded-xl shadow-md px-3 my-2">
      <DueDate due_date={habit?.end_date} />
      <HabitDate start_date={habit?.start_date} end_date={habit?.end_date} />
      <Text text_tag="p" size="xs" color="primary" extra_style="w-[50%] text-left" bold>
        {habit?.title}
      </Text>
      <Button size="xs" color="secondary" rounded link={`/habit/${habit?.id}`}>
        👀
      </Button>
    </article>
  );
};

export default HabitItem;
