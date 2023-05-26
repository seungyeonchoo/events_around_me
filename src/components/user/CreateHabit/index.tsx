import Button from '../../common/Button';
import LabeledInput from '../../common/LabeledInput';
import HabitDatePicker from './components/HabitDuration';

const CreateHabit = () => {
  return (
    <section className="w-[30rem] h-[30rem] border p-5 flex flex-col">
      <LabeledInput
        label="title"
        type="text"
        name="title"
        input_size="full"
        responsive
        maxLength={20}
        placeholder="Habit Title"
      />
      <HabitDatePicker />
      <textarea
        className="border border-dark w-[90%] max-sm:w-[81%] my-10 p-5 h-[8rem] text-xs mx-auto resize-none "
        autoComplete="off"
        placeholder="Habit Description"
      />
      <div className="w-[50%] mx-auto flex justify-evenly">
        <Button size="sm" rounded color="primary" extra_style="shadow-xl">
          O
        </Button>
        <Button size="sm" rounded color="primary" extra_style="shadow-xl">
          X
        </Button>
      </div>
      {/* 
    title
    description
    end-date
     */}
    </section>
  );
};

export default CreateHabit;
