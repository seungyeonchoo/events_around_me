import Button from '../../../../../../src/components/common/Button';

export interface HabitButtonProps {
  toggle: 'total' | 'completed' | 'not_yet';
  // eslint-disable-next-line no-unused-vars
  onClick: (toggle: 'total' | 'completed' | 'not_yet') => void;
}

const HabitButton = ({ toggle, onClick }: HabitButtonProps) => {
  return (
    <div className="flex justify-between">
      <Button
        color="primary"
        size="lg"
        name="total"
        onClick={() => onClick('total')}
        disabled={toggle === 'total'}
        responsive
      >
        🗓
      </Button>
      <Button
        color="primary"
        size="lg"
        name="completed"
        extra_style="mx-2"
        onClick={() => onClick('completed')}
        disabled={toggle === 'completed'}
        responsive
      >
        🙆
      </Button>
      <Button
        color="primary"
        size="lg"
        name="not_yet"
        onClick={() => onClick('not_yet')}
        disabled={toggle === 'not_yet'}
        responsive
      >
        🙅
      </Button>
    </div>
  );
};

export default HabitButton;
