import styled from '@emotion/styled';
import { UhBeeSe_hyun } from '../../../utils/fonts';
import { useQuery } from '@tanstack/react-query';
import { getGourmetList } from '../../../api/gourmet';
import ListItem from './ListItem';

function Sidebar() {
  const { data } = useQuery(['gourmetList'], getGourmetList, { keepPreviousData: true });

  return (
    <Layout>
      <Title>리스트</Title>
      {data?.map((item) => (
        <ListItem
          key={item._id}
          data={item}
        />
      ))}
    </Layout>
  );
}

export default Sidebar;

const Layout = styled.div`
  width: 470px;
  height: calc(100vh - 55px);
  background: #f3f3f3;
  box-shadow: 20px 8px 11px -8px rgba(0, 0, 0, 0.05);
  padding: 60px 40px;
`;

const Title = styled.div`
  font-family: ${UhBeeSe_hyun.style.fontFamily};
  color: #13171d;
  padding: 0 0 30px;
`;
