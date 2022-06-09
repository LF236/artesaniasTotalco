import React, { useState } from 'react';
import { AppBar, Container, Typography, Box, CssBaseline, IconButton, Menu, MenuItem, Button, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MenuIcon from '@mui/icons-material/Menu';
const CmpHeader = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const pages = [
        { name: 'Categorias', url: '/categorias' },
        { name: 'Ofertas', url: '/ofertas' },
    ];

    const handleOpenNavMenu = (e) => {
        setAnchorElNav(e.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <>
            <AppBar position='static'>
                <CssBaseline />
                <Container maxWidth='xl'>
                    <Toolbar>
                        <LocalFloristIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            Artesanias Totalco
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                color='inherit'
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                keepMounted
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                            >
                                {pages.map(page => (
                                    <MenuItem key={`${page.name} ${ page.url }`} onClick={handleCloseNavMenu}>
                                        {/* <Typography variant='a' href='/da'>{ page.name }</Typography> */}
                                        <Link underline='none' href={ page.url } color='#fff'>{page.name}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <LocalFloristIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant='h5'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}

                        >
                            Artesanias Totalco
                        </Typography>
                        <Box
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        >
                            {pages.map(page => (
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    href={page.url}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default CmpHeader;