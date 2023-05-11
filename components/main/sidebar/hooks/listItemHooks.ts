import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteGourmet, getGourmetList, updateGourmet } from '../../../../api/gourmet';
import { PostForm } from '../../../../types/post';
import { toast } from 'react-toastify';

export const useGetGourmetList = () => {
  return useQuery(['gourmetList'], getGourmetList, { keepPreviousData: true });
};

export const useUpdateGourmet = () => {
  return useMutation({
    mutationFn: (variables: { id: string; form: PostForm }) => updateGourmet(variables),
    onSuccess: () => toast.success('수정되었습니다!'),
    onError: (error) => toast.error(`에러 발생! ${error}`),
  });
};

export const useDeleteGourmet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteGourmet(id),
    onSuccess: () => {
      toast.success('삭제되었습니다!');
      queryClient.invalidateQueries(['gourmetList']);
    },
    onError: (error) => toast.error(`에러 발생! ${error}`),
  });
};
