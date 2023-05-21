import Text from '../../Atoms/Text';

export interface CurrentDateProps {}

const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const CurrentDate = (props: CurrentDateProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = MONTH[new Date().getMonth()];
  const currentDate = new Date().getDate();
  const currentDay = new Date().getDay();
  return (
    <Text size="2xl" text_tag="p" color="secondary" extra_style="text-center mt-10" bold>
      {`${currentDate}. ${currentMonth}. ${currentYear} (${DAY[currentDay]})`}
    </Text>
  );
};

export default CurrentDate;
