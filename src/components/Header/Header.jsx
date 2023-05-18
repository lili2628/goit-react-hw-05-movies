

const Header = () => {
    return (
        <Header>
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
        </Header>
    );
};
  


export default Header;