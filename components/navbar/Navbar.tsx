/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';

function Navbar() {
  return (
    <Layout>
      <img src='/sumikko.png' alt='logo' height={40} />
      <p>구루메디비</p>
    </Layout>
  );
}

export default Navbar;

const Layout = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: #e0e8f3;
  font-family: 'GangwonEduSaeeum_OTFMediumA';
  font-size: 30px;
  color: #000;
  padding-left: 20px;
`;
