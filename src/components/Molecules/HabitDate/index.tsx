import { getConvertedDate } from '../../../lib/dateUtils';
import Text from '../../Atoms/Text';

export interface HabitDateProps {
  start_date: string;
  end_date: string;
}

const HabitDate = ({ start_date, end_date }: HabitDateProps) => {
  return (
    <div className="max-sm:hidden">
      <Text text_tag="p" size="xs" color="dark">
        {getConvertedDate(start_date)}
      </Text>
      <Text text_tag="p" size="xs" color="dark">
        {getConvertedDate(end_date)}
      </Text>
    </div>
  );
};

export default HabitDate;
