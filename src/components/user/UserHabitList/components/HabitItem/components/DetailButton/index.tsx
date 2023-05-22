import Button from '../../../../../../../../src/components/common/Button';

export interface DetailButtonProps {
  id: number;
}

const DetailButton = ({ id }: DetailButtonProps) => {
  return (
    <Button size="xs" color="secondary" rounded link={`/habit/${id}`}>
      👀
    </Button>
  );
};

export default DetailButton;
