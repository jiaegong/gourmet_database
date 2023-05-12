import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteGourmet } from '../../../../api/gourmet';
import { toast } from 'react-toastify';

const useDeleteGourmet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteGourmet(id),
    onSuccess: () => {
      toast.success('삭제되었습니다!');
      queryClient.invalidateQueries(['gourmetList']);
    },
    onError: error => toast.error(`에러 발생! ${error}`),
  });
};

export default useDeleteGourmet;
