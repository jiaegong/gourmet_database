import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from '@emotion/styled';
import { Pretendard } from '../../utils/fonts';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container className={Pretendard.className}>
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100v;
  height: 100vh;
  display: grid;
  grid-template-rows: 55px auto;
  grid-template-areas:
    'header'
    'main';
`;

const Main = styled.div`
  grid-area: main;
`;
