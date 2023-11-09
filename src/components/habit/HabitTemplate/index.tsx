import { IHabit } from '@/src/lib/types';
import { useRouter } from 'next/router';
import CompleteButton from '../CompleteButton';
import HabitDetail from '../HabitDetail';
import ListContainer from '../ListContainer';

export interface HabitTemplateProps {
  habit: IHabit;
  handleDelete: () => void;
  handleComplete: () => void;
}

const HabitTemplate = ({ habit, handleComplete, handleDelete }: HabitTemplateProps) => {
  const router = useRouter();
  return (
    <section>
      <HabitDetail habit={habit} handleDelete={handleDelete} />
      <CompleteButton habit={habit} onClick={handleComplete} />
      <ListContainer daily_status={habit?.daily_status} />
      <button className="m-auto" onClick={() => router.push(`/user/${habit?.userId}`)}>
        뒤로가기
      </button>
    </section>
  );
};

export default HabitTemplate;
