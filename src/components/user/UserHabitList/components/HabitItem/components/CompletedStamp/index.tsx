import Text from '../../../../../../../../src/components/common/Text';

const CompletedStamp = () => {
  return (
    <Text
      text_tag="span"
      size="sm"
      color="default"
      extra_style="absolute opacity-20 bg-secondary py-2 w-[50%] text-center rounded-md"
      bold
      italic
    >
      COMPLETED 🔥
    </Text>
  );
};

export default CompletedStamp;
