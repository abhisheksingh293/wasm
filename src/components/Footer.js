import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon
} from '@mui/icons-material';

// Wrap MUI components with motion
const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      text: '+91 6207483176',
      link: 'tel:+916207483176'
    },
    {
      icon: <WhatsAppIcon />,
      text: '+91 6207483176',
      link: 'https://wa.me/916207483176'
    },
    {
      icon: <LocationIcon />,
      text: 'Jamshedpur, Jharkhand',
      link: 'https://goo.gl/maps/1Z9Z2Z2Z2Z2Z2Z2Z2'
    },
    {
      icon: <EmailIcon />,
      text: 'contact@wasmate.com',
      link: 'mailto:contact@wasmate.com'
    }
  ];

  const quickLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' },
    { text: 'Terms & Conditions', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' }
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', color: '#1877f2' },
    { icon: <TwitterIcon />, href: '#', color: '#1da1f2' },
    { icon: <InstagramIcon />, href: '#', color: '#e4405f' },
    { icon: <LinkedInIcon />, href: '#', color: '#0077b5' }
  ];

  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIconAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <MotionBox
      component="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerAnimation}
      sx={{
        background: 'rgba(12, 13, 33, 0.9)',
        backdropFilter: 'blur(20px)',
        color: 'primary.contrastText',
        pt: 8,
        pb: 4,
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #7928CA, #FF0080, #00DFD8)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(121, 40, 202, 0.1), rgba(255, 0, 128, 0.1))',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 800,
                background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 3,
                textShadow: '0 2px 20px rgba(94, 234, 212, 0.3)',
                letterSpacing: '-0.02em',
              }}
            >
              Wasmate
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7
              }}
            >
              Premium laundry service in Jamshedpur. Professional washing, dry cleaning, and ironing services at your doorstep.
            </Typography>
            <Stack spacing={2.5}>
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  underline="none"
                  color="inherit"
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: '#5EEAD4',
                    gap: 1,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#F472B6',
                      transform: 'translateY(-2px)',
                      textShadow: '0 0 8px rgba(244, 114, 182, 0.5)',
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      color: '#5EEAD4'
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="body2">{item.text}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                color: '#F8FAFC',
                mb: 3,
                letterSpacing: '-0.01em',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  underline="none"
                  color="inherit"
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#CBD5E1',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#5EEAD4',
                      transform: 'translateX(4px)',
                    }
                  }}
                >
                  <Typography variant="body2">{link.text}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter & Social Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontFamily: "'Clash Display', sans-serif",
                fontWeight: 700,
                color: '#F8FAFC',
                mb: 3,
                letterSpacing: '-0.01em',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }
              }}
            >
              Connect With Us
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 3,
                color: 'rgba(255, 255, 255, 0.85)',
                textAlign: 'center',
                mt: 4,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#FFFFFF',
                }
              }}
            >
              Follow us on social media for updates, tips, and special offers!
            </Typography>
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                mb: 4
              }}
            >
              {socialLinks.map((social, index) => (
                <MotionIconButton
                  key={index}
                  href={social.href}
                  initial="rest"
                  whileHover="hover"
                  variants={socialIconAnimation}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      backgroundColor: social.color,
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  {social.icon}
                </MotionIconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500
            }}
          >
            {new Date().getFullYear()} Wasmate. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </MotionBox>
  );
}

export default Footer;
