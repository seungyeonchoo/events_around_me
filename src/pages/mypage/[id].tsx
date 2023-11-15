import MypageTemplate from '@/src/components/mypage/MypageTemplate';
import ApiService from '@/src/lib/service';
import { useQuery } from 'react-query';

export const getServerSideProps = async (context: any) => {
  const userID = context?.query.id;

  return {
    props: {
      userID,
    },
  };
};

const Mypage = ({ userID }: any) => {
  const API = new ApiService();
  const { data } = useQuery(['user', { id: userID }], () => API.get(`users/${userID}`));

  return <MypageTemplate user={data} />;
};

export default Mypage;
