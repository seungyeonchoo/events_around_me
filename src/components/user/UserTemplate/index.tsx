import { IUser } from '@/src/lib/types';
import useToggle from '../../../../src/lib/hooks/useToggle';
import CreateHabit from '../CreateHabit';
import UserHabitList from '../UserHabitList';
import UserTitle from '../UserTitle';

export interface UserTemplateProps {
  user: IUser;
}
// handleCreateToggle => 클릭 시 해빗 생성 모달

const UserTemplate = ({ user }: UserTemplateProps) => {
  const { toggle, handleToggle } = useToggle(false);

  return (
    <section className="flex flex-col items-center">
      <UserTitle user={user} />
      {toggle ? (
        <CreateHabit onCreate={handleToggle} onCancel={handleToggle} />
      ) : (
        <UserHabitList habits={user?.habits} handleCreateToggle={handleToggle} />
      )}
    </section>
  );
};

export default UserTemplate;
