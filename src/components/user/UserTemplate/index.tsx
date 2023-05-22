import { IUser } from '@/src/lib/types';
import UserHabitList from '../UserHabitList';
import UserTitle from '../UserTitle';

export interface UserTemplateProps {
  user: IUser;
}
// handleCreateToggle => 클릭 시 해빗 생성 모달

const UserTemplate = ({ user }: UserTemplateProps) => {
  return (
    <section className="flex flex-col items-center">
      <UserTitle user={user} />
      <UserHabitList habits={user?.habits} handleCreateToggle={() => console.log('create')} />
    </section>
  );
};

export default UserTemplate;
