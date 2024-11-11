import { Box, Button, Link, Typography } from '@mui/material';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import { SignUpForm, StyledContainer } from '@/app/components';
// import FacebookAuthButton from '@/app/components/buttons/FacebookAuthButton';
import { FacebookIcon, GoogleIcon } from '@/app/components';

import styles from './styles';

const SignUp = () => {

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
                <Link sx={{ color: '#fff' }} href={process.env.PRIVATE_REPO_URL}>Navigate to private repository</Link>
              </Button>            
            </Box>
          </Box>
          <Box sx={styles.formWrapper}>
            <SignUpForm />
            <Typography variant="subtitle1">
              By signing up, I agree to the <Link href="privacy-policy">Privacy Policy</Link> and
              <Link href="terms-and-conditions">Terms and Conditions</Link>
            </Typography>
          </Box>
          <Box sx={styles.socialsWrapper}>
            <Box sx={styles.buttonWrapper}>
              {process.env.googleClientId && <GoogleIcon />}
              {process.env.facebookClientId && <FacebookIcon />}
            </Box>
          </Box>
        <Box sx={styles.bottomLinks}>
          <Typography variant="subtitle1">Have an account?</Typography>
          <Link href="/sign-in">Login</Link>
        </Box>
        </StyledContainer>
      </Box>
    // </GoogleOAuthProvider>
  );
};

export default SignUp;
