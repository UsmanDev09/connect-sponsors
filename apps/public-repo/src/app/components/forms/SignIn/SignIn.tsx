import { Box, Button, Link, Typography } from '@mui/material';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import {
  EmailSignInForm,
  GoogleAuthButton,
  LinkedinAuthButton,
  StyledContainer,
} from '@/app/components';
import FacebookAuthButton from '@/app/components/buttons/FacebookAuthButton';
import styles from './styles';

export default function SignIn() {

    return (
    // <GoogleOAuthProvider clientId={process.env.googleClientId}>
    <Box sx={{...styles.container, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <StyledContainer sx={styles.root}>
          <Box sx={styles.titleIconWrapper}>
            <Box sx={styles.titleWrapper}>
              <Typography variant="h2">This is a public repo</Typography>
              <Button 
                sx={{ width:'400px' }}
                variant="contained" 
                size="large"
              >
                <Link sx={{ color: '#fff' }} href={process.env.PRIVATE_REPO_URL} >Navigate to private repository</Link>
              </Button>
            </Box>            
          </Box>
          <EmailSignInForm />
          <Box sx={styles.socialsWrapper}>
            <Link href="/forgot-password">Forgot password?</Link>
            <Box sx={styles.buttonWrapper}>
              {process.env.linkedinClientId && <LinkedinAuthButton fullWidth />}
              {process.env.googleClientId && <GoogleAuthButton fullWidth />}
              {process.env.facebookClientId && <FacebookAuthButton />}
            </Box>
          </Box>
          <Box sx={styles.bottomLinks}>
            <Typography variant="subtitle1">Don’t have an account?</Typography>
            <Link href="/">Sign up</Link>
          </Box>
        </StyledContainer>
      </Box>
    // </GoogleOAuthProvider>
  );
}
