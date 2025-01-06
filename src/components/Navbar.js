import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact', path: '/contact' },
];

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 24 : 0}
      sx={{
        background: scrolled 
          ? 'rgba(15, 23, 42, 0.9)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled 
          ? '1px solid rgba(94, 234, 212, 0.1)'
          : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}
          >
            <LocalLaundryServiceIcon 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                mr: 1,
                color: '#5EEAD4',
                fontSize: '2rem'
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
              }}
            >
              WashMate
            </Typography>
          </MotionBox>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#5EEAD4' }}
            >
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
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
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  background: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(94, 234, 212, 0.1)',
                  borderRadius: 2,
                  mt: 1,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.title} 
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={page.path}
                  sx={{
                    '&:hover': {
                      background: 'rgba(94, 234, 212, 0.1)',
                    },
                  }}
                >
                  <Typography 
                    textAlign="center"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: '#F8FAFC',
                      '&:hover': {
                        color: '#5EEAD4',
                      },
                    }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              flexGrow: 1,
              alignItems: 'center'
            }}
          >
            <LocalLaundryServiceIcon 
              sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                mr: 1,
                color: '#5EEAD4',
                fontSize: '1.8rem'
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textDecoration: 'none',
              }}
            >
              WashMate
            </Typography>
          </MotionBox>

          {/* Desktop Menu */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 4
            }}
          >
            {pages.map((page, index) => (
              <MotionBox
                key={page.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  component="a"
                  href={page.path}
                  sx={{
                    color: '#F8FAFC',
                    display: 'block',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      background: 'transparent',
                      color: '#5EEAD4',
                      '&::after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {page.title}
                </Button>
              </MotionBox>
            ))}
          </Box>

          {/* Contact Button */}
          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="contained"
              startIcon={<PhoneIcon />}
              href="tel:+916207483176"
              sx={{
                display: { xs: 'none', md: 'flex' },
                background: 'linear-gradient(135deg, #2DD4BF, #5EEAD4)',
                color: '#0F172A',
                fontWeight: 600,
                px: 3,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 30px rgba(45, 212, 191, 0.4)',
                },
              }}
            >
              Contact Us
            </Button>
          </MotionBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
