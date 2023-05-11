import styled from '@emotion/styled';
import { Stack, TextField, Button, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import { PostForm } from '../../types/post';
import { UhBeeSe_hyun } from '../../utils/fonts';
import { useHandleClickableMap } from '../../store/clickableMap';
import { usePlaceAddress, usePlaceLocation } from '../../store/placeInfo';
import { usePostGourmet } from './hooks/postFormHooks';

type Props = {
  open: boolean;
  onClose: () => void;
};

function PostForm({ open, onClose }: Props) {
  const placeAddress = usePlaceAddress();
  const placeLocation = usePlaceLocation();
  const handleClickableMap = useHandleClickableMap();

  const { register, handleSubmit } = useForm<Omit<PostForm, 'location'>>();

  const { mutate: postGourmet, isLoading } = usePostGourmet();

  const onSubmit = (form: Omit<PostForm, 'location'>) => {
    const formData: PostForm = {
      ...form,
      location: placeLocation,
    };
    postGourmet(formData);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      hideBackdrop
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: 'calc(470px - 80px)', // 80px 왜 생기는 걸까..
        width: '430px',
        height: 'auto',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Layout>
          <Title>등록하기</Title>
          <Stack sx={{ padding: '32px', gap: '25px' }}>
            <FormTextField label="이름" variant="outlined" {...register('name', { required: true })} />
            <FormTextField label="평점" variant="outlined" {...register('rating', { required: true })} />
            <FormTextField label="설명" variant="outlined" {...register('desc', { required: true })} />
            <FormTextField label="타입" variant="outlined" {...register('type', { required: true })} />
            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
              <FormTextField label="위치" variant="outlined" value={placeAddress} />
              <Button onClick={() => handleClickableMap(true)}>지도에서 클릭</Button>
            </Stack>
            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <CancelButton variant="contained" type="button" onClick={onClose}>
                취소
              </CancelButton>
              <SaveButton variant="contained" type="submit" disabled={isLoading}>
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
