import React from 'react';
import Navbar from '../navbar/Navbar';
import styled from '@emotion/styled';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
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
  grid-template-rows: 60px auto;
  grid-template-areas:
    'header'
    'main';
`;

const Main = styled.div`
  grid-area: main;
`;
