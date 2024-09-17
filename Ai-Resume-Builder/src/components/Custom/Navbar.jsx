import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import logo from "./../../../public/logo.svg";
import { Link, useNavigate } from 'react-router-dom';

const pages = [ 'Dashboard'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { user, isSignedIn } = useUser();
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleNavigate = (page) => {
        navigate(`/${page}`);
        handleCloseNavMenu();  // Close the menu after navigation
    };

    return (
        <AppBar sx={{ backgroundColor: "transparent" }} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                    
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            userSelect: "none",
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt='Logo' onClick={() => navigate('/')} />
                    </Typography>

                    {/* Mobile view menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleNavigate(page)}>
                                    <Typography sx={{ color: 'black', textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>

                        <img src={logo} alt='Logo' onClick={() => navigate('/')} />

                    </Box>

                    {/* Desktop view menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavigate(page)}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                    {isSignedIn ? (
                        <Box>
                            <UserButton />
                        </Box>
                    ) : (
                        <Box>
                            <SignInButton mode="modal">
                                <Button variant="contained" color="primary">
                                    Sign In
                                </Button>
                            </SignInButton>
                        </Box>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
