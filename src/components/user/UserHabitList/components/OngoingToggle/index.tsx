import CheckBox from '../../../../../../src/components/common/CheckBox';
import Text from '../../../../../../src/components/common/Text';

export interface OngoingToggleProps {
  ongoing: boolean;
  onChange: () => void;
}

const OngoingToggle = ({ onChange, ongoing }: OngoingToggleProps) => {
  return (
    <section className="mt-1 px-5 flex justify-end items-center">
      <Text text_tag="span" size="xs" color="secondary" extra_style="mx-3" bold>
        Show only ongoing
      </Text>
      <CheckBox toggle_size="sm" color="primary" onChange={onChange} checked={ongoing} />
    </section>
  );
};

export default OngoingToggle;
