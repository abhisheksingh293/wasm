import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2DD4BF',
      light: '#5EEAD4',
      dark: '#14B8A6',
      contrastText: '#0F172A',
    },
    secondary: {
      main: '#F472B6',
      light: '#FDA4AF',
      dark: '#E11D48',
      contrastText: '#0F172A',
    },
    background: {
      default: '#0F172A',
      paper: 'rgba(30, 41, 59, 0.8)',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1',
    },
  },
  typography: {
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    h1: {
      fontFamily: "'Clash Display', sans-serif",
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Clash Display', sans-serif",
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "'Clash Display', sans-serif",
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    subtitle1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: "'Space Grotesk', sans-serif",
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0F172A, #1E293B)',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 28px',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #2DD4BF, #5EEAD4)',
          color: '#0F172A',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #5EEAD4, #2DD4BF)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(45, 212, 191, 0.4)',
          },
        },
        outlined: {
          borderColor: '#2DD4BF',
          color: '#2DD4BF',
          '&:hover': {
            borderColor: '#5EEAD4',
            color: '#5EEAD4',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 30px rgba(45, 212, 191, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(94, 234, 212, 0.1)',
          borderRadius: 24,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: '1px solid rgba(94, 234, 212, 0.2)',
            boxShadow: '0 20px 40px rgba(45, 212, 191, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: 24,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(94, 234, 212, 0.1)',
        },
      },
    },
  },
});

export default theme;
