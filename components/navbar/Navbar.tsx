/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';
import { UhBeeSe_hyun } from '../../utils/fonts';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  return (
    <Layout>
      <Logo onClick={() => router.push('/')}>
        <img
          src='/sumikko.png'
          alt='logo'
          height={40}
        />
        <p>구루메디비</p>
      </Logo>
      <PostButton onClick={() => router.push('/post')}>지애만 등록</PostButton>
    </Layout>
  );
}

export default Navbar;

const Layout = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background-color: #e0e8f3;
  font-family: ${UhBeeSe_hyun.style.fontFamily};
  font-size: 1.25rem;
  color: #13171d;
  padding: 0 20px;
  box-shadow: 0px 9px 10px -4px rgba(0, 0, 0, 0.2);
  transform: rotate(0.05deg);
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const PostButton = styled.div`
  cursor: pointer;
  &:hover {
    color: #89a5cc;
  }
`;
