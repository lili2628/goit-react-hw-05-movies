import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";

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