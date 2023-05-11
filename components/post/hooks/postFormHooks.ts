import { useMutation } from '@tanstack/react-query';
import { createGourmet } from '../../../api/gourmet';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export const usePostGourmet = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: createGourmet,
    onSuccess: () => {
      toast.success('저장되었습니다!');
      router.push('/');
    },
    onError: error => toast.error(`에러 발생! ${error}`),
  });
};
