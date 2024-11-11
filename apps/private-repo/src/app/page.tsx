'use client';

import { Button } from '@monorepo/ui';
import { Box, Link, Typography } from '@mui/material';


export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
      <Typography variant="h2">This is a private repo</Typography>
      <Button 
        sx={{ width:'400px' }}
        variant="contained" 
        size="large"
      >
        <Link sx={{ color: '#fff' }} href={process.env.PUBLIC_REPO_URL}>Navigate to public repository</Link>
      </Button>
    </Box>
  );
}
