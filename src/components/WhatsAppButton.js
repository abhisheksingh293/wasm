import React from 'react';
import { Fab, Tooltip, useTheme } from '@mui/material';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';

function WhatsAppButton() {
  const theme = useTheme();

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left" arrow>
      <Fab
        component="a"
        href="https://wa.me/916207483176"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: '#25D366',
          color: 'white',
          '&:hover': {
            bgcolor: '#128C7E'
          },
          zIndex: theme.zIndex.speedDial,
        }}
      >
        <WhatsAppIcon fontSize="large" />
      </Fab>
    </Tooltip>
  );
}

export default WhatsAppButton;
