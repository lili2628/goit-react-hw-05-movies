import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main> 
    </>
  );
};

export default SharedLayout;