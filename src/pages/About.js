import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import RecyclingIcon from '@mui/icons-material/Recycling';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionCard = motion(Card);

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    description: 'Visionary leader with 15+ years in the laundry industry.',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    description: 'Expert in streamlining laundry operations and customer service.',
  },
  {
    name: 'Mike Johnson',
    role: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    description: 'Ensures the highest standards in cleaning and service delivery.',
  },
];

const values = [
  {
    icon: <LocalLaundryServiceIcon sx={{ fontSize: 40 }} />,
    title: 'Professional Service',
    description: 'We deliver expert care for all your laundry needs with state-of-the-art equipment.',
  },
  {
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
    title: 'Eco-Friendly',
    description: 'Committed to using environmentally friendly products and processes.',
  },
  {
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority, with personalized service every time.',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40 }} />,
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee.',
  },
];

function About() {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5)',
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
            About WashMate
          </MotionTypography>
          <MotionTypography
            variant="h5"
            align="center"
            sx={{ color: '#CBD5E1', maxWidth: '800px', mx: 'auto', mb: 8 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your trusted partner in premium laundry services. We combine cutting-edge technology
            with eco-friendly practices to deliver exceptional results.
          </MotionTypography>
        </Container>
      </Box>

      {/* Values Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        color: '#5EEAD4',
                        background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(244, 114, 182, 0.2))',
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#F8FAFC',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography sx={{ color: '#CBD5E1' }}>
                      {value.description}
                    </Typography>
                  </Stack>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.97), rgba(30, 41, 59, 0.97))',
        }}
      >
        <Container maxWidth="lg">
          <MotionTypography
            variant="h2"
            align="center"
            sx={{
              mb: 8,
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
            Meet Our Team
          </MotionTypography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                  <Stack spacing={3} alignItems="center" textAlign="center">
                    <Avatar
                      src={member.image}
                      sx={{
                        width: 120,
                        height: 120,
                        border: '4px solid rgba(94, 234, 212, 0.2)',
                      }}
                    />
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
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#5EEAD4',
                          fontFamily: "'Space Grotesk', sans-serif",
                          mb: 2,
                        }}
                      >
                        {member.role}
                      </Typography>
                      <Typography sx={{ color: '#CBD5E1' }}>
                        {member.description}
                      </Typography>
                    </Box>
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

export default About;
