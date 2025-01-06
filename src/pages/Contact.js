import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const contactInfo = [
  {
    icon: <PhoneIcon sx={{ fontSize: 40 }} />,
    title: 'Phone',
    content: '+91 6207483176',
    action: 'tel:+916207483176',
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
    title: 'WhatsApp',
    content: '+91 6207483176',
    action: 'https://wa.me/916207483176',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: 'Email',
    content: 'info@washmate.com',
    action: 'mailto:info@washmate.com',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
    title: 'Location',
    content: 'Jamshedpur, Jharkhand',
    action: 'https://goo.gl/maps/your-location',
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 15,
          pb: 8,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(30, 41, 59, 0.97))',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <MotionTypography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              mb: 4,
              background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 20px rgba(94, 234, 212, 0.3)',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </MotionTypography>
          <MotionTypography
            variant="h5"
            align="center"
            sx={{ color: '#CBD5E1', maxWidth: '800px', mx: 'auto', mb: 8 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with us for premium laundry services. We're here to help!
          </MotionTypography>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard
                  component="a"
                  href={info.action}
                  target={info.title === 'Location' || info.title === 'WhatsApp' ? '_blank' : ''}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(94, 234, 212, 0.1)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: '1px solid rgba(94, 234, 212, 0.2)',
                      boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
                    },
                  }}
                >
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        color: '#5EEAD4',
                        background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(244, 114, 182, 0.2))',
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#F8FAFC',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography sx={{ color: '#CBD5E1' }}>
                        {info.content}
                      </Typography>
                    </Box>
                  </Stack>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(30, 41, 59, 0.97))',
        }}
      >
        <Container maxWidth="md">
          <MotionCard
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              p: 4,
              background: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(94, 234, 212, 0.1)',
              borderRadius: 4,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#F8FAFC',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    Send us a message
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#F8FAFC',
                        '& fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#5EEAD4',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#CBD5E1',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#F8FAFC',
                        '& fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#5EEAD4',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#CBD5E1',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#F8FAFC',
                        '& fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#5EEAD4',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#CBD5E1',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#F8FAFC',
                        '& fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(94, 234, 212, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#5EEAD4',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#CBD5E1',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      background: 'linear-gradient(135deg, #2DD4BF, #5EEAD4)',
                      color: '#0F172A',
                      fontWeight: 600,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 30px rgba(45, 212, 191, 0.4)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </MotionCard>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
