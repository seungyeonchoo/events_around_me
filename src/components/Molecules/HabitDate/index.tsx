import Text from '../../Atoms/Text';

export interface HabitDateProps {
  start_date: string;
  end_date: string;
}

const HabitDate = ({ start_date, end_date }: HabitDateProps) => {
  return (
    <div className="max-sm:hidden">
      <Text text_tag="p" size="xs" color="dark">
        {start_date}
      </Text>
      <Text text_tag="p" size="xs" color="dark">
        {end_date}
      </Text>
    </div>
  );
};

export default HabitDate;
