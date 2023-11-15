import { IUser } from '@/src/lib/types';
import { useState } from 'react';
import ProfileImage from '../../common/ProfileImage';
import UserTitle from '../../common/UserTitle';

interface MypageTemplateProps {
  user: IUser;
}

const MypageTemplate = ({ user }: MypageTemplateProps) => {
  const [input, setInput] = useState<IUser>({
    id: user?.id,
    profileImage: user?.profileImage || '',
    lastName: user?.lastName,
    firstName: user?.firstName,
    email: user?.email,
    password: user?.password,
  });

  return (
    <section className="flex justify-center sm:flex-col md:flex-col sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] py-[10%]">
      <UserTitle user={user} />
      <section className="h-[30rem] w-[40rem] bg-default_weak sm:w-[90%] md:w-[90%] flex justify-evenly items-center shadow-md rounded-xl overflow-hidden relative">
        <section className="flex flex-col">
          <ProfileImage input={input} setInput={setInput} />
          <div className="my-[2rem]">
            <div>가입일</div>
            <div>진행중인 habit</div>
            <div>완료한 habit</div>
            <div>작성한 일기</div>
          </div>
        </section>
        <form className="bg-gray-50 p-[2.5rem] h-[90%] rounded-[0.25rem] shadow-md">
          <label className="flex flex-col my-[1rem] items-center">
            <span>이메일</span>
            <input
              type="text"
              value="hello"
              className="text-[0.9rem] px-[2rem] border w-[15rem] h-[2.75rem] disabled:border-none mt-[1rem]"
              disabled={true}
            />
          </label>
          <label className="flex flex-col my-[1rem] items-center">
            <span>성</span>
            <input
              type="text"
              value="hello"
              className="text-[0.9rem] px-[2rem] border w-[15rem] h-[2.75rem] disabled:border-none mt-[1rem]"
              disabled={true}
            />
          </label>
          <label className="flex flex-col my-[1rem] items-center">
            <span>이름</span>
            <input
              type="text"
              value="hello"
              className="text-[0.9rem] px-[2rem] border w-[15rem] h-[2.75rem] disabled:border-none mt-[1rem]"
              disabled={true}
            />
          </label>
        </form>
      </section>
    </section>
  );
};

export default MypageTemplate;
