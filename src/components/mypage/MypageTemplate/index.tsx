import { IUser } from '@/src/lib/types';
import ProfileImage from '../../common/ProfileImage';
import UserTitle from '../../common/UserTitle';

interface MypageTemplateProps {
  user: IUser;
}

const MypageTemplate = ({ user }: MypageTemplateProps) => {
  return (
    <section className="flex justify-center sm:flex-col md:flex-col sm:w-full md:w-full sm:items-center md:items-center lg:px-[10%] py-[10%]">
      <UserTitle user={user} />
      <ProfileImage />
    </section>
  );
};

export default MypageTemplate;
