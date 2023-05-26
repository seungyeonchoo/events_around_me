import LabeledInput from '../../common/LabeledInput';
import CreateButton from './components/CreateButton';
import HabitDescription from './components/HabitDescription';
import HabitDuration from './components/HabitDuration';

export interface CreateHabitProps {
  onCreate: () => void;
  onCancel: () => void;
}

const CreateHabit = ({ onCreate, onCancel }: CreateHabitProps) => {
  return (
    <section className="w-[40rem] flex flex-col max-sm:w-full mx-auto">
      <LabeledInput
        label="title"
        type="text"
        name="title"
        input_size="full"
        responsive
        maxLength={20}
        placeholder="Habit Title"
      />
      <HabitDuration />
      <HabitDescription />
      <CreateButton onCreate={onCreate} onCancel={onCancel} />
    </section>
  );
};

export default CreateHabit;
