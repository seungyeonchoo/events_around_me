import HabitTemplate from '@/src/components/habit/HabitTemplate';
import { mockHabit_3 } from '@/src/lib/mocks/mockData';

const Habit = () => {
  return (
    <main>
      <HabitTemplate habit={mockHabit_3} />
    </main>
  );
};

export default Habit;
