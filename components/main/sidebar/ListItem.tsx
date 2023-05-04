import styled from '@emotion/styled';
import { PostData } from '../../../types/post';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import { useDeleteGourmet } from './hooks/useListItemQuery';

type Props = {
  data: PostData;
};

function ListItem({ data }: Props) {
  const { mutate: deleteGourmet } = useDeleteGourmet();
  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton sx={{ ':hover': { color: '#89a5cc' } }}>
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{ ':hover': { color: '#89a5cc' } }}
          onClick={() => deleteGourmet(data._id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      <Text>{data.name}</Text>
      <Text>등록일: {dayjs(data.createdDate).format('YYYY-MM-DD')}</Text>
      <Text>타입: {data.type}</Text>
      <Text>평점: {data.rating}</Text>
      <Text>설명: {data.desc}</Text>
    </Layout>
  );
}

export default ListItem;

const Layout = styled.div`
  padding: 30px;
  border-top: 1px solid #13171d;
`;

const Text = styled.p`
  color: #13171d;
`;
