/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { UhBeeSe_hyun } from '../../utils/fonts';

function Navbar() {
  return (
    <Layout>
      <img
        src='/sumikko.png'
        alt='logo'
        height={40}
      />
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
  font-family: ${UhBeeSe_hyun.style.fontFamily};
  font-size: 1.25rem;
  color: #000;
  padding-left: 20px;
  box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.2);
`;
