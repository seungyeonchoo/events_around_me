import Button from '../../../../../../src/components/common/Button';

export interface CreateButtonProps {
  onCreate: () => void;
  onCancel: () => void;
  disabled?: boolean | undefined;
}

const CreateButton = ({ onCreate, onCancel, disabled }: CreateButtonProps) => {
  return (
    <div className="w-[80%] mx-auto flex justify-evenly">
      <Button
        size="sm"
        rounded
        color="primary"
        extra_style="shadow-xl"
        disabled={disabled}
        onClick={onCreate}
      >
        O
      </Button>
      <Button size="sm" rounded color="primary" extra_style="shadow-xl" onClick={onCancel}>
        X
      </Button>
    </div>
  );
};

export default CreateButton;
