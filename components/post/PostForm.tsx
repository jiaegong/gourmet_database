import styled from '@emotion/styled';
import { Stack, TextField, Button, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createGourmet } from '../../api/gourmet';
import { PostForm } from '../../types/post';
import { UhBeeSe_hyun } from '../../utils/fonts';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

type Props = {
  open: boolean;
  onClose: () => void;
};

function PostForm({ open, onClose }: Props) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<PostForm>();

  const { mutate, isLoading } = useMutation({
    mutationFn: createGourmet,
    onSuccess: () => {
      toast.success('저장되었습니다!');
      router.push('/');
    },
    onError: (error) => toast.error(`에러 발생! ${error}`),
  });

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiBackdrop-root': {
          backgroundColor: 'transparent',
        },
      }}
    >
      <form onSubmit={handleSubmit((form: PostForm) => mutate(form))}>
        <Layout>
          <Title>등록하기</Title>
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
            <FormTextField
              label='위치'
              variant='outlined'
              {...register('location', { required: true })}
            />
            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <CancelButton
                variant='contained'
                type='button'
                onClick={onClose}
              >
                취소
              </CancelButton>
              <SaveButton
                variant='contained'
                type='submit'
                disabled={isLoading}
              >
                저장하기
              </SaveButton>
            </Stack>
          </Stack>
        </Layout>
      </form>
    </Modal>
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
  background: #fff;
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
  color: #13171d;
`;

const FormTextField = styled(TextField)`
  background: #fff;
  & label {
    color: #b3b3b3;
  }
  & label.Mui-focused {
    color: #89a5cc;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border: 1px solid #b3b3b3;
    }
    &:hover fieldset {
      border-color: #89a5cc;
    }
    &.Mui-focused fieldset {
      border-color: #89a5cc;
    }
  }
  & input {
    color: #b3b3b3;
  }
`;

const buttonStyle = `
  width: 100%;
  background: #e0e8f3;
  box-shadow: none;

  &:hover {
    background: #89a5cc;
  }
`;

const SaveButton = styled(Button)`
  ${buttonStyle}
`;

const CancelButton = styled(Button)`
  ${buttonStyle}
`;
