import { getConvertedDate } from '../../../../../../src/lib/utils/dateUtils';
import Text from '../../../../common/Text';

const CurrentDate = () => {
  const curr = new Date().toDateString();
  return (
    <Text
      size="2xl"
      text_tag="p"
      color="secondary"
      extra_style="text-center mt-10 max-sm:text-2xl"
      bold
    >
      {getConvertedDate(curr, true)}
    </Text>
  );
};

export default CurrentDate;
