import { useQuery } from 'react-query';
import ApiService from '../service';

const useFetch = async (url: string) => {
  const fetchData = await new ApiService().get(url);
  return useQuery([url.slice(1)], fetchData, { keepPreviousData: true });
};

export default useFetch;
