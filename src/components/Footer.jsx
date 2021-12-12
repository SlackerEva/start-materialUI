
import { Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{mt: '2rem', mb: '2rem'}}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        Made by Les 2021
      </Typography>
    </Box>
  );
}