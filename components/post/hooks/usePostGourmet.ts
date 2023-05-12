import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createGourmet } from '../../../api/gourmet';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const usePostGourmet = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGourmet,
    onSuccess: () => {
      toast.success('저장되었습니다!');
      router.push('/');
      queryClient.invalidateQueries(['gourmetList']);
    },
    onError: error => toast.error(`에러 발생! ${error}`),
  });
};

export default usePostGourmet;
