'use client';

import { Button } from '@monorepo/ui';
import { Box } from '@mui/material';


export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Button 
        sx={{ width:'400px' }}
        variant="contained" 
        size="large"
        onClick={() => alert('Button clicked!')}
      >
        This is a private repository
      </Button>
      </Box>
  );
}
