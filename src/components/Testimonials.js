import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { FormatQuote as QuoteIcon } from '@mui/icons-material';

const MotionCard = motion(Card);

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    avatar: "/images/avatar1.jpg",
    rating: 5,
    text: "Wasmate has completely transformed how I handle my laundry. Their service is prompt, professional, and the quality is outstanding!"
  },
  {
    name: "Rahul Verma",
    role: "Business Professional",
    avatar: "/images/avatar2.jpg",
    rating: 5,
    text: "As a busy professional, Wasmate's service is a lifesaver. Their attention to detail and quick turnaround time is exactly what I needed."
  },
  {
    name: "Anjali Patel",
    role: "Homemaker",
    avatar: "/images/avatar3.jpg",
    rating: 5,
    text: "The convenience of doorstep pickup and delivery combined with their excellent service makes Wasmate my go-to laundry service."
  }
];

function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(45, 212, 191, 0.15), transparent 50%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at bottom left, rgba(244, 114, 182, 0.15), transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{
            mb: 6,
            fontFamily: "'Clash Display', sans-serif",
            fontWeight: 800,
            background: 'linear-gradient(135deg, #5EEAD4, #F472B6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 2px 20px rgba(94, 234, 212, 0.3)',
          }}
        >
          What Our Customers Say
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  variants={cardVariants}
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
                      '& .MuiTypography-root': {
                        color: '#F8FAFC',
                      },
                      '& .quote-icon': {
                        color: '#5EEAD4',
                      }
                    },
                  }}
                >
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      src={testimonial.avatar} 
                      sx={{ 
                        width: 56, 
                        height: 56, 
                        mr: 2,
                        border: '2px solid #5EEAD4',
                      }}
                    />
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          color: '#F8FAFC',
                          mb: 0.5 
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontFamily: "'Inter', sans-serif",
                          color: '#94A3B8' 
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <QuoteIcon 
                    className="quote-icon"
                    sx={{ 
                      fontSize: 40, 
                      color: '#5EEAD4',
                      opacity: 0.6,
                      mb: 2 
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#CBD5E1',
                      lineHeight: 1.7,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
                    <Rating 
                      value={testimonial.rating} 
                      readOnly 
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: '#5EEAD4',
                        },
                        '& .MuiRating-iconEmpty': {
                          color: 'rgba(94, 234, 212, 0.3)',
                        },
                      }}
                    />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        ml: 1,
                        fontFamily: "'Inter', sans-serif",
                        color: '#94A3B8' 
                      }}
                    >
                      {testimonial.rating}.0
                    </Typography>
                  </Box>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Testimonials;
