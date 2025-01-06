import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import IronIcon from '@mui/icons-material/Iron';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PhoneIcon from '@mui/icons-material/Phone';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const services = [
  {
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 48 }} />,
    title: 'Wash & Fold',
    description: 'Professional washing and folding service for all types of garments.',
    price: 'From ₹60/kg',
    features: [
      'Separate treatment for whites and colors',
      'Premium detergents used',
      'Fabric softener included',
      '24-hour turnaround',
    ],
  },
  {
    icon: <DryCleaningIcon sx={{ fontSize: 48 }} />,
    title: 'Dry Cleaning',
    description: 'Expert dry cleaning for delicate and special care garments.',
    price: 'From ₹150/piece',
    features: [
      'Stain removal treatment',
      'Delicate fabric care',
      'Pressing and finishing',
      '48-hour turnaround',
    ],
  },
  {
    icon: <IronIcon sx={{ fontSize: 48 }} />,
    title: 'Ironing Service',
    description: 'Professional pressing service for crisp, wrinkle-free garments.',
    price: 'From ₹20/piece',
    features: [
      'Steam ironing available',
      'Hanging or folding options',
      'Same-day service available',
      'Bulk discounts',
    ],
  },
  {
    icon: <DeliveryDiningIcon sx={{ fontSize: 48 }} />,
    title: 'Pickup & Delivery',
    description: 'Convenient door-to-door service for your laundry needs.',
    price: 'Free*',
    features: [
      'Scheduled pickups',
      'Real-time tracking',
      'Contactless delivery',
      'Flexible timing',
    ],
  },
];

function Services() {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1545173168-9f1947eebb7f)',
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
            Our Services
          </MotionTypography>
          <MotionTypography
            variant="h5"
            align="center"
            sx={{ color: '#CBD5E1', maxWidth: '800px', mx: 'auto', mb: 8 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional laundry services tailored to your needs. Experience premium care for your garments.
          </MotionTypography>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MotionCard
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
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: '1px solid rgba(94, 234, 212, 0.2)',
                      boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
                    },
                  }}
                >
                  <Stack spacing={3}>
                    <Box
                      sx={{
                        color: '#5EEAD4',
                        background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(244, 114, 182, 0.2))',
                        p: 2,
                        borderRadius: 2,
                        width: 'fit-content',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          color: '#F8FAFC',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: '#5EEAD4',
                          fontFamily: "'Space Grotesk', sans-serif",
                          mb: 2,
                        }}
                      >
                        {service.price}
                      </Typography>
                      <Typography sx={{ color: '#CBD5E1', mb: 3 }}>
                        {service.description}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#F8FAFC',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        Features:
                      </Typography>
                      <Stack spacing={1}>
                        {service.features.map((feature, idx) => (
                          <Typography
                            key={idx}
                            sx={{
                              color: '#CBD5E1',
                              display: 'flex',
                              alignItems: 'center',
                              '&::before': {
                                content: '""',
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: '#5EEAD4',
                                mr: 2,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                    <Button
                      variant="contained"
                      startIcon={<PhoneIcon />}
                      href="tel:+916207483176"
                      sx={{
                        mt: 2,
                        background: 'linear-gradient(135deg, #2DD4BF, #5EEAD4)',
                        color: '#0F172A',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 30px rgba(45, 212, 191, 0.4)',
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Stack>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;
