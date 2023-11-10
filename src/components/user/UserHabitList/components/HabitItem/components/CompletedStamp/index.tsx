import Text from '../../../../../../../../src/components/common/Text';

const CompletedStamp = () => {
  return (
    <Text
      text_tag="span"
      size="md"
      color="secondary"
      extra_style="absolute opacity-40 py-2 w-[50%] text-center rounded-md leading-[1rem]"
      bold
      italic
    >
      COMPLETED TODAY 🔥
    </Text>
  );
};

export default CompletedStamp;
