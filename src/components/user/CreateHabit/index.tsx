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
    userId: number;
    duration: number;
  };
  // eslint-disable-next-line no-unused-vars
  handleHabitInput: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

const CreateHabit = ({ onCreate, onCancel, habitInput, handleHabitInput }: CreateHabitProps) => {
  return (
    <section className="h-[30rem] w-[40rem] bg-default_weak sm:w-[90%] md:w-[90%] py-[1rem] flex flex-col justify-between shadow-md rounded-xl overflow-hidden relative">
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
        isValid={habitInput.title.length > 0}
      />
      <HabitDuration onChange={handleHabitInput} />
      <HabitDescription value={habitInput?.description} onChange={handleHabitInput} />
      <CreateButton
        onCreate={onCreate}
        onCancel={onCancel}
        disabled={habitInput.title.length === 0 || habitInput.duration === 0}
      />
    </section>
  );
};

export default CreateHabit;
