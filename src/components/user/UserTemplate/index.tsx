import { IUser } from '@/src/lib/types';
import { ChangeEvent } from 'react';
import CreateHabit from '../CreateHabit';
import UserHabitList from '../UserHabitList';
import UserTitle from '../UserTitle';

export interface UserTemplateProps {
  user: IUser;
  // eslint-disable-next-line no-unused-vars
  handleHabitInput: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  habitInput: {
    title: string;
    start_date: string;
    end_date: string;
    description: string;
    userId: number;
  };
  createToggle: boolean;
  handleCreateToggle: () => void;
  createHabit: () => void;
  handleCancel: () => void;
}
// handleCreateToggle => 클릭 시 해빗 생성 모달

const UserTemplate = ({
  user,
  habitInput,
  handleHabitInput,
  createToggle,
  handleCreateToggle,
  createHabit,
  handleCancel,
}: UserTemplateProps) => {
  return (
    <section className="flex flex-col items-center">
      <UserTitle user={user} />
      {createToggle ? (
        <CreateHabit
          onCreate={createHabit}
          onCancel={handleCancel}
          handleHabitInput={handleHabitInput}
          habitInput={habitInput}
        />
      ) : (
        <UserHabitList habits={user?.habits} handleCreateToggle={handleCreateToggle} />
      )}
    </section>
  );
};

export default UserTemplate;
