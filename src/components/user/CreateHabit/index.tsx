import LabeledInput from '../../common/LabeledInput';

const CreateHabit = () => {
  return (
    <section className="w-[30rem] h-[20rem] border">
      <LabeledInput label="title" input_size="full" />
      {/* 
    title
    description
    end-date
     */}
    </section>
  );
};

export default CreateHabit;
