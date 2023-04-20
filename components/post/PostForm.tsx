import styled from '@emotion/styled';
import { Input, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createGourmet } from '../../api/gourmet';

function PostForm() {
  const { register, handleSubmit } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: createGourmet,
    onSuccess: () => console.log('저장!'),
    onError: () => console.log('실패!'),
  });

  return (
    <form onSubmit={handleSubmit((form) => mutate(form))}>
      <Layout>
        <Title>My place 등록</Title>
        <RowBox>
          이름
          <Input {...register('name', { required: true })} />
        </RowBox>
        <RowBox>
          평점
          <Input {...register('rating', { required: true })} />
        </RowBox>
        <RowBox>
          설명
          <Input {...register('desc')} />
        </RowBox>
        <RowBox>
          타입
          <Input {...register('type', { required: true })} />
        </RowBox>
        <Button
          type='submit'
          disabled={isLoading}
        >
          저장하기
        </Button>
      </Layout>
    </form>
  );
}

export default PostForm;

const Layout = styled.div`
  max-width: 412px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

const Title = styled.div``;

const RowBox = styled.div`
  display: flex;
`;

const ColBox = styled.div`
  display: flex;
  flex-direction: column;
`;
