import { Box, Nav, NavListLink, NavList, Container } from './Header.styled';

const Header = () => {
    return (
        <Box>
            <Container>
                <Nav>
                    <NavList key='/'> 
                        <NavListLink to='/'>
                            Home
                        </NavListLink>
                    </NavList>
                    <NavList key='movies'> 
                        <NavListLink to='movies'>
                            Movies
                        </NavListLink>
                    </NavList>
                </Nav>
            </Container>
        </Box>
    );
};

export default Header;