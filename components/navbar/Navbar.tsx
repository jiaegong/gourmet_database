/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';

function Navbar() {
  return (
    <Layout>
      <img src='/sumikko.png' alt='logo' height={40} />
      구루메디비
    </Layout>
  );
}

export default Navbar;

const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #e0e8f3;
  font-family: 'GangwonEduSaeeum_OTFMediumA';
  font-size: 30px;
  color: #000;
  padding-left: 20px;
`;
