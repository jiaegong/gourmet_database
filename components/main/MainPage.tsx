import styled from '@emotion/styled';
import Map from './map/Map';
import Sidebar from './sidebar/Sidebar';

function MainPage() {
  return (
    <Layout>
      <Sidebar />
      <Map />
    </Layout>
  );
}

export default MainPage;

const Layout = styled.div`
  display: flex;
`;
