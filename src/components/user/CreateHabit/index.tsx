import { ChangeEvent } from 'react';
import LabeledInput from '../../common/LabeledInput';
import CreateButton from './components/CreateButton';
import HabitDescription from './components/HabitDescription';
import HabitDuration from './components/HabitDuration';

export interface CreateHabitProps {
  onCreate: () => void;
  onCancel: () => void;
  habitInput: {
    title: string;
    start_date: string;
    end_date: string;
    description: string;
  };
  // eslint-disable-next-line no-unused-vars
  handleHabitInput: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

const CreateHabit = ({ onCreate, onCancel, habitInput, handleHabitInput }: CreateHabitProps) => {
  return (
    <section className="w-[40rem] flex flex-col max-sm:w-full mx-auto">
      <LabeledInput
        label="title"
        type="text"
        name="title"
        input_size="full"
        responsive
        maxLength={20}
        value={habitInput?.title}
        onChange={handleHabitInput}
        placeholder="Habit Title"
      />
      <HabitDuration onChange={handleHabitInput} />
      <HabitDescription value={habitInput?.description} onChange={handleHabitInput} />
      <CreateButton onCreate={onCreate} onCancel={onCancel} />
    </section>
  );
};

export default CreateHabit;
