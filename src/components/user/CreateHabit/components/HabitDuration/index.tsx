import { ChangeEvent } from 'react';
import Text from '../../../../common/Text';
import DurationRadio from '../DurationRadio';

export interface HabitDurationProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const HabitDuration = ({ onChange }: HabitDurationProps) => {
  return (
    <fieldset className="flex flex-col justify-between my-5 m-auto w-[90%]">
      <legend className="mb-2 max-sm:mx-auto max-sm:w-[90%]">
        <Text text_tag="span" size="xs" bold color="dark">
          Duration
        </Text>
      </legend>
      <div
        onChange={onChange}
        className="text-xs flex px-5 justify-between w-full max-sm:w-[90%] max-sm:px-3 max-sm:text-[0.5rem] border border-dark m-auto p-3 bg-white"
      >
        <DurationRadio name="duration" value={90} label={90} />
        <DurationRadio name="duration" value={180} label={180} />
        <DurationRadio name="duration" value={270} label={270} />
        <DurationRadio name="duration" value={365} label={365} />
      </div>
    </fieldset>
  );
};

export default HabitDuration;
