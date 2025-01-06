import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Stack,
  useTheme
} from '@mui/material';
import {
  Phone as PhoneIcon,
  LocalLaundryService as LaundryIcon,
  Speed as SpeedIcon,
  LocalShipping as ShippingIcon,
  Support as SupportIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from '../utils/animations';
import Testimonials from './Testimonials';

// Wrap MUI components with motion
const MotionContainer = motion(Container);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionGrid = motion(Grid);
const MotionPaper = motion(Paper);
const MotionCard = motion(Card);

function Home() {
  const theme = useTheme();

  const colleges = [
    {
      name: "NIT Jamshedpur",
      address: "NIT Campus, Adityapur",
      pincode: "Jamshedpur, Jharkhand - 831014"
    },
    {
      name: "XLRI Jamshedpur",
      address: "Circuit House Area (East)",
      pincode: "Jamshedpur, Jharkhand - 831001"
    },
    {
      name: "Tata Institute of Social Sciences",
      address: "Dimna Road",
      pincode: "Jamshedpur, Jharkhand - 831017"
    },
    {
      name: "Karim City College",
      address: "Sakchi",
      pincode: "Jamshedpur, Jharkhand - 831001"
    },
    {
      name: "Graduate School College for Women",
      address: "Sakchi",
      pincode: "Jamshedpur, Jharkhand - 831001"
    },
    {
      name: "Jamshedpur Women's College",
      address: "Bistupur",
      pincode: "Jamshedpur, Jharkhand - 831001"
    },
    {
      name: "NTTF Jamshedpur",
      address: "Burmamines",
      pincode: "Jamshedpur, Jharkhand - 831007"
    },
    {
      name: "ABM College",
      address: "Golmuri",
      pincode: "Jamshedpur, Jharkhand - 831003"
    },
    {
      name: "Jamshedpur Co-operative College",
      address: "Bistupur",
      pincode: "Jamshedpur, Jharkhand - 831001"
    }
  ];

  const features = [
    {
      icon: <LaundryIcon sx={{ fontSize: 40 }} />,
      title: "Quality Service",
      description: "Premium quality cleaning for all your garments"
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: "Quick Turnaround",
      description: "24-48 hours delivery time"
    },
    {
      icon: <ShippingIcon sx={{ fontSize: 40 }} />,
      title: "Free Pickup",
      description: "Free pickup and delivery at your doorstep"
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: "24/7 Support",
      description: "Always available for your queries"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        sx={{
          position: 'relative',
          pt: 12,
          pb: 12,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1545173168-9f1947eebb7f)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.15), transparent 70%)',
            zIndex: 2,
          },
        }}
      >
        <MotionContainer maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Box textAlign="center" maxWidth="800px" mx="auto">
            <MotionTypography
              variant="h1"
              component="h1"
              gutterBottom
              variants={fadeInUp}
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 2px 20px rgba(94, 234, 212, 0.3)',
                mb: 2,
              }}
            >
              Premium Laundry Service
              <Typography
                variant="h2"
                component="span"
                display="block"
                sx={{
                  background: 'linear-gradient(135deg, #F472B6, #5EEAD4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 2px 20px rgba(244, 114, 182, 0.3)',
                }}
              >
                in Jamshedpur
              </Typography>
            </MotionTypography>
            <MotionTypography
              variant="h5"
              paragraph
              variants={fadeInUp}
              sx={{ 
                mb: 4,
                color: '#CBD5E1',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Professional washing, dry cleaning, and ironing services at your doorstep
            </MotionTypography>
            <MotionButton
              variant="contained"
              size="large"
              href="tel:+916207483176"
              startIcon={<PhoneIcon />}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                background: 'linear-gradient(135deg, #2DD4BF, #5EEAD4)',
                color: '#0F172A',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 12,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 30px rgba(45, 212, 191, 0.4)',
                }
              }}
            >
              Call Now
            </MotionButton>
          </Box>
        </MotionContainer>
      </Box>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Features Section */}
      <Box
        component={motion.div}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top left, rgba(45, 212, 191, 0.15), transparent 70%)',
            zIndex: 2,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 8,
              background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 20px rgba(94, 234, 212, 0.3)',
            }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionPaper
                  elevation={3}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(94, 234, 212, 0.1)',
                    borderRadius: 24,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(94, 234, 212, 0.2)',
                      boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
                    }
                  }}
                >
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(244, 114, 182, 0.2))',
                        border: '1px solid rgba(94, 234, 212, 0.2)',
                        color: '#5EEAD4',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        color: '#F8FAFC',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#CBD5E1',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Stack>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Colleges Section */}
      <Box
        component={motion.div}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(30, 41, 59, 0.97))',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1582735689369-4fe89db7114c)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at bottom right, rgba(45, 212, 191, 0.15), transparent 70%)',
            zIndex: 2,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 8,
              background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 20px rgba(94, 234, 212, 0.3)',
            }}
          >
            Our Partner Colleges
          </Typography>
          <Grid container spacing={4}>
            {colleges.map((college, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionCard
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  sx={{
                    height: '100%',
                    p: 4,
                    background: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(94, 234, 212, 0.1)',
                    borderRadius: 24,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(94, 234, 212, 0.2)',
                      boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: '#F8FAFC',
                      mb: 2,
                    }}
                  >
                    {college.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#CBD5E1',
                      mb: 1,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {college.address}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#94A3B8',
                    }}
                  >
                    <LocationIcon fontSize="small" sx={{ color: '#5EEAD4' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {college.pincode}
                    </Typography>
                  </Box>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        component={motion.div}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(https://images.unsplash.com/photo-1604335399105-a0c585fd81a1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top left, rgba(45, 212, 191, 0.15), transparent 70%)',
            zIndex: 2,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 3 }}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              component="h2"
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
            >
              Experience Premium Laundry Service
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                mb: 4,
                color: '#CBD5E1',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Join thousands of satisfied customers who trust us with their laundry needs
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="tel:+916207483176"
              startIcon={<PhoneIcon />}
              sx={{
                background: 'linear-gradient(135deg, #2DD4BF, #5EEAD4)',
                color: '#0F172A',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: 12,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 30px rgba(45, 212, 191, 0.4)',
                }
              }}
            >
              Contact Us Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
