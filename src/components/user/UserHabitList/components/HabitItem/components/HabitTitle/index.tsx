import Text from '../../../../../../../../src/components/common/Text';

export interface HabitTitleProps {
  title: string;
}

const HabitTitle = ({ title }: HabitTitleProps) => {
  return (
    <Text text_tag="p" size="xs" color="primary" extra_style="w-[50%] text-left" bold>
      {title}
    </Text>
  );
};

export default HabitTitle;
