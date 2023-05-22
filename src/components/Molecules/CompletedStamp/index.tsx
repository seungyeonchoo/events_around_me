import Text from '../../Atoms/Text';

const CompletedStamp = () => {
  return (
    <Text
      text_tag="span"
      size="xs"
      extra_style="absolute opacity-20 bg-secondary py-2 px-5 rounded-md"
      bold
      italic
    >
      COMPLETED TODAY🔥
    </Text>
  );
};

export default CompletedStamp;
