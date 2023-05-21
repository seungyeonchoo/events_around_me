import Text from '../../Atoms/Text';

export interface CurrentDateProps {}

const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAY = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATUDAY'];

const CurrentDate = (props: CurrentDateProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = MONTH[new Date().getMonth()];
  const currentDate = new Date().getDate();
  const currentDay = new Date().getDay();
  return (
    <Text size="3xl" text_tag="span" color="secondary" extra_style="text-center" bold>
      {`${currentDate} ${currentMonth} ${currentYear}`}
      <br />
      {DAY[currentDay]}
    </Text>
  );
};

export default CurrentDate;