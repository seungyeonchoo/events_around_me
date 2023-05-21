import Button from '../../Atoms/Button';
import Text from '../../Atoms/Text';

export interface HabitItemProps {}

const HabitItem = ({ ...rest }: HabitItemProps) => {
  return (
    <article className="flex items-center justify-around border border-primary w-[80%] h-[3rem] m-auto rounded-xl shadow-md px-1">
      <div className="h-[2rem] w-[2rem] bg-primary rounded-full text-sm font-bold text-center text-default leading-8">
        79
      </div>
      <div>
        <Text text_tag="p" size="xs" color="dark">
          16.05.2022
        </Text>
        <Text text_tag="p" size="xs" color="dark">
          16.05.2023
        </Text>
      </div>
      <Text text_tag="p" size="xs" color="primary" extra_style="w-[50%] text-center" bold>
        Git commit - everyday!!!
      </Text>
      <Button size="xs" color="secondary" rounded>
        🔎
      </Button>
    </article>
  );
};

export default HabitItem;
