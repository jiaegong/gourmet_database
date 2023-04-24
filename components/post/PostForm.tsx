import styled from '@emotion/styled';
import { Stack, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createGourmet } from '../../api/gourmet';
import { PostForm } from '../../types/post';
import { UhBeeSe_hyun } from '../../utils/fonts';

function PostForm() {
  const { register, handleSubmit } = useForm<PostForm>();

  const { mutate, isLoading } = useMutation({
    mutationFn: createGourmet,
    onSuccess: () => console.log('저장!'),
    onError: () => console.log('실패!'),
  });

  return (
    <form onSubmit={handleSubmit((form: PostForm) => mutate(form))}>
      <Layout>
        <Title>구루메 등록하기</Title>
        <Stack sx={{ padding: '32px', gap: '25px' }}>
          <FormTextField
            label='이름'
            variant='outlined'
            {...register('name', { required: true })}
          />
          <FormTextField
            label='평점'
            variant='outlined'
            {...register('rating', { required: true })}
          />
          <FormTextField
            label='설명'
            variant='outlined'
            {...register('desc', { required: true })}
          />
          <FormTextField
            label='타입'
            variant='outlined'
            {...register('type', { required: true })}
          />
          <SaveButton
            variant='contained'
            type='submit'
            disabled={isLoading}
          >
            저장하기
          </SaveButton>
        </Stack>
      </Layout>
    </form>
  );
}

export default PostForm;

const Layout = styled.div`
  width: 430px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background: #e0e8f3;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-family: ${UhBeeSe_hyun.style.fontFamily};
`;

const FormTextField = styled(TextField)`
  & label {
    color: #b3b3b3;
  }
  & label.Mui-focused {
    color: #a2bcdc;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border: 1px solid #b3b3b3;
    }
    &:hover fieldset {
      border-color: #a2bcdc;
    }
    &.Mui-focused fieldset {
      border-color: #a2bcdc;
    }
  }
  & input {
    color: #b3b3b3;
  }
`;

const SaveButton = styled(Button)`
  background: #e0e8f3;
  box-shadow: none;

  &:hover {
    background: #a2bcdc;
  }
`;
