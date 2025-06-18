import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import myPic from "../assets/myPic 1.jpg"; // Make sure path is correct
import { useEffect } from 'react';
import { useState } from 'react';

const pages = ['About Me', 'Skills', 'Projects', 'Contact Me'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="sticky" sx={{
      bgcolor: isScrolled ? "rgba(0,0,0,0.2)" : "transparent", boxShadow: 'none', backdropFilter: "blur(6px)",
      transition: "all 0.3s ease",
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Icon + Brand */}
          <CodeOffSharpIcon className="text-yellow-200" sx={{ fontSize: "3.7rem", display: { xs: 'none', md: 'flex' }, mr: 1 }} />


          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "center" }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="text-slate-100" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className="text-blue-400">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Small Logo */}
          <CodeOffSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className="text-white" />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#"
            className="text-white"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '.1rem',
              textDecoration: 'none',
            }}
          >
            SIBGHAT ULLAH
          </Typography>

          {/* Desktop Menu with hover effect */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className="relative group text-purple-200 hover:text-black font-bolder font-medium tracking-wide"
                sx={{ background: "transparent", px: 2 }}
              >
                <span className="relative text-white font-bold z-10">{page}</span>
                <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-blue-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Button>
            ))}
          </Box>

          {/* Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Sibghat Ullah" sx={{ width: "3.5rem", height: "3.6rem" }} src={myPic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
