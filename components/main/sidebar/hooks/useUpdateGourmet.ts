import { useMutation } from '@tanstack/react-query';
import { PostForm } from '../../../../types/post';
import { updateGourmet } from '../../../../api/gourmet';
import { toast } from 'react-toastify';

const useUpdateGourmet = () => {
  return useMutation({
    mutationFn: (variables: { id: string; form: PostForm }) => updateGourmet(variables),
    onSuccess: () => toast.success('수정되었습니다!'),
    onError: error => toast.error(`에러 발생! ${error}`),
  });
};

export default useUpdateGourmet;
