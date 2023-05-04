import styled from '@emotion/styled';
import { UhBeeSe_hyun } from '../../../utils/fonts';
import ListItem from './ListItem';
import { useGetGourmetList } from './hooks/useListItemQuery';
import { IconButton, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PostForm from '../../post/PostForm';
import { useState } from 'react';

function Sidebar() {
  const { data } = useGetGourmetList();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Layout>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '10px',
          }}
        >
          <Title>리스트</Title>
          <IconButton
            sx={{ ':hover': { color: '#89a5cc' } }}
            onClick={() => setOpen(true)}
          >
            <AddCircleIcon />
          </IconButton>
        </Stack>
        {data?.map((item) => (
          <ListItem
            key={item._id}
            data={item}
          />
        ))}
      </Layout>

      {/* 등록하기 모달 */}
      <PostForm
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default Sidebar;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 470px;
  height: calc(100vh - 55px);
  background: #f3f3f3;
  box-shadow: 20px 8px 11px -8px rgba(0, 0, 0, 0.05);
  padding: 60px 40px;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-family: ${UhBeeSe_hyun.style.fontFamily};
  color: #13171d;
`;
