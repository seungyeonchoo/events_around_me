import { IHabit, IUser } from '@/src/lib/types';
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
  isLoading: boolean;
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
  isLoading,
}: UserTemplateProps) => {
  return (
    <section className="flex justify-center sm:flex-col md:flex-col sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] sm:py-[1rem] py-[5%]">
      <UserTitle user={user} />
      {createToggle ? (
        <CreateHabit
          onCreate={createHabit}
          onCancel={handleCancel}
          handleHabitInput={handleHabitInput}
          habitInput={habitInput}
        />
      ) : (
        <UserHabitList
          habits={user?.habits as IHabit[]}
          handleCreateToggle={handleCreateToggle}
          isLoading={isLoading}
        />
      )}
    </section>
  );
};

export default UserTemplate;
