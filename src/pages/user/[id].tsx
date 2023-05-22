import UserTemplate from '@/src/components/user/UserTemplate';
import { mockUser } from '@/src/lib/mocks/mockData';

const User = () => {
  return (
    <main>
      <UserTemplate user={mockUser} />
    </main>
  );
};

export default User;

// 헤더
// -- 컴포넌트
// 웰컴 유저네임 user.firstName + user.lastName
// -- 컴포넌트
// 날짜
// 시간
// -- 컴포넌트
// 현재 진행중인, 완료한, 미완료한
