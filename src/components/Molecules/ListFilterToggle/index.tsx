import { ChangeEvent } from 'react';
import CheckBox from '../../Atoms/CheckBox';
import Text from '../../Atoms/Text';

export interface ListFilterToggleProps {
  showAll: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListFilterToggle = ({ onChange, showAll }: ListFilterToggleProps) => {
  return (
    <label className="mt-1 px-5 flex justify-end items-center">
      <Text text_tag="span" size="xs" color="secondary" extra_style="mx-3" bold>
        Show only ongoing habit
      </Text>
      <CheckBox toggle_size="sm" color="primary" onChange={onChange} showAll={showAll} />
    </label>
  );
};

export default ListFilterToggle;
