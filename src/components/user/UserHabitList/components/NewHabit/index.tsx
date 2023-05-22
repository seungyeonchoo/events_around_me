import Button from '../../../../../../src/components/common/Button';

export interface NewHabitProps {
  handleNewHabitToggle: () => void;
}

const NewHabit = ({ handleNewHabitToggle }: NewHabitProps) => {
  return (
    <Button
      size="sm"
      color="primary"
      extra_style="absolute bottom-[1rem] right-[2rem] shadow-xl"
      rounded
      onClick={handleNewHabitToggle}
    >
      ✏️
    </Button>
  );
};

export default NewHabit;
