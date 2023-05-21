import { getConvertedDate } from '../../../lib/dateUtils';
import Text from '../../Atoms/Text';

export interface CurrentDateProps {}

const CurrentDate = ({ ...rest }: CurrentDateProps) => {
  const curr = new Date().toDateString();
  return (
    <Text size="2xl" text_tag="p" color="secondary" extra_style="text-center mt-10" bold>
      {getConvertedDate(curr, true)}
    </Text>
  );
};

export default CurrentDate;
