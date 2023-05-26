import Text from '../../../../common/Text';
import DurationRadio from '../DurationRadio';

const HabitDuration = () => {
  return (
    <fieldset className="flex flex-col my-5 m-auto w-[90%]">
      <legend className="mb-2 max-sm:mx-auto max-sm:w-[90%]">
        <Text text_tag="span" size="xs" bold color="dark">
          Duration
        </Text>
        <span className="text-[0.5rem]"> - How long are you going to do? (days)</span>
      </legend>
      <div className="text-xs flex justify-between px-6 w-full max-sm:w-[90%] border border-dark m-auto p-3">
        <DurationRadio name="duration" value={90} label={90} />
        <DurationRadio name="duration" value={180} label={180} />
        <DurationRadio name="duration" value={270} label={270} />
        <DurationRadio name="duration" value={365} label={365} />
      </div>
    </fieldset>
  );
};

export default HabitDuration;
