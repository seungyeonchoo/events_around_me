import Text from '@/src/components/common/Text';
import { IUser } from '../../../../../../src/lib/types';

export interface WelcomeTitleProps {
  user: IUser;
}

const WelcomeTitle = ({ user }: WelcomeTitleProps) => {
  return (
    // <Text text_tag="h1" color="primary" size="3xl" extra_style="text-center max-sm:hidden" bold>
    //   Welcome {user?.firstName.toUpperCase()}
    // </Text>
    <div className="w-[25rem] h-[8rem] px-[1rem] bg-primary flex items-center rounded-[0.75rem] sm:w-full md:w-full justify-between">
      <img src="" alt="" className="w-[5rem] h-[5rem] rounded-full bg-red-100" />
      <Text text_tag="p" color="default" size="3xl" bold>
        {user?.lastName.toUpperCase() + ' ' + user?.firstName.toUpperCase()}
      </Text>
      <div className="flex flex-col">
        <span>유저정보</span>
        <span>할일</span>
        <span>일기</span>
        <span>로그아웃</span>
      </div>
    </div>
  );
};

export default WelcomeTitle;
