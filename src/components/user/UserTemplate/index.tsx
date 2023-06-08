import { IUser } from '@/src/lib/types';
import useInput from '../../../../src/lib/hooks/useInput';
import useToggle from '../../../../src/lib/hooks/useToggle';
import CreateHabit from '../CreateHabit';
import UserHabitList from '../UserHabitList';
import UserTitle from '../UserTitle';

export interface UserTemplateProps {
  user: IUser;
}
// handleCreateToggle => 클릭 시 해빗 생성 모달

const initialHabit = {
  title: '',
  start_date: new Date().toDateString(),
  end_date: '',
  description: '',
};

const UserTemplate = ({ user }: UserTemplateProps) => {
  const { toggle, handleToggle } = useToggle(false);
  const { input: habitInput, handleInput: handleHabitInput } = useInput(initialHabit);
  console.log(habitInput);
  return (
    <section className="flex flex-col items-center">
      <UserTitle user={user} />
      {toggle ? (
        <CreateHabit
          onCreate={handleToggle}
          onCancel={handleToggle}
          handleHabitInput={handleHabitInput}
          habitInput={habitInput}
        />
      ) : (
        <UserHabitList habits={user?.habits} handleCreateToggle={handleToggle} />
      )}
    </section>
  );
};

export default UserTemplate;
