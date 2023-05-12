import { useQuery } from '@tanstack/react-query';
import { getGourmetList } from '../../../../api/gourmet';

const useGetGourmetList = () => {
  return useQuery(['gourmetList'], getGourmetList, { keepPreviousData: true });
};

export default useGetGourmetList;
