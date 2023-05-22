import Text from '../../../../../../../../src/components/common/Text';

const CompletedStamp = () => {
  return (
    <Text
      text_tag="span"
      size="xs"
      bold
      color="default"
      italic
      extra_style="absolute opacity-20 bg-secondary py-2 px-3 text-center rounded-md"
    >
      COMPLETED 🔥
    </Text>
  );
};

export default CompletedStamp;
