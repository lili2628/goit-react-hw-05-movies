import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <NavLink>
            <StyledLink to="/" end>
                Home
            </StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
      </NavLink>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;