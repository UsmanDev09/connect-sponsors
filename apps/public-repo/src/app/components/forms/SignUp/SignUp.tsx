'use client'
import { useState } from 'react'
import {
    Box,
    Button,
    Container,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Stack,
    Typography,
} from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { styles } from './styles'

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ email, password })
    }

    return (
      
      <Box sx={styles.container}> 
          <Container sx={styles.innerContainer}>
              <Stack spacing={4} alignItems="center">
                  <Typography component="h1" sx={styles.title}>
                      <span>Connect</span>Sponsors.Com
                  </Typography>
      
                  <Box sx={styles.box}>
                      <Stack spacing={2} sx={styles.stack}>
                          <Typography variant="h2" align="center" sx={styles.subtitle}>
                              #1 most used tool to find & convert sponsorship opportunities
                          </Typography>
                          <Typography variant="subtitle1" align="center" sx={styles.description}>
                              Sign up & get access to the 1,000+ most active Youtube Sponsors in 30 languages
                          </Typography>
      
                          <Stack direction="row" spacing={2}>
                              <Button variant="social" sx={styles.socialButton} endIcon={<Image src="/google-icon.png" alt="Google" width={14.07} height={14.07} />}>
                                  Login With Google
                              </Button>
                              <Button variant="social" sx={styles.socialButton} endIcon={<Image src="/microsoft-icon.png" alt="Microsoft" width={14.07} height={14.07} />}>
                                  Login With Microsoft
                              </Button>
                          </Stack>
      
                          <form onSubmit={handleSubmit}>
                              <Stack spacing={2}>
                                  <OutlinedInput
                                      fullWidth
                                      placeholder="Password *"
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}
                                      type={showPassword ? 'text' : 'password'}
                                      endAdornment={
                                          <InputAdornment position="end">
                                              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                  {/* {showPassword ? <VisibilityOff sx={styles.icon} /> : <Visibility sx={styles.icon} />} */}
                                              </IconButton>
                                          </InputAdornment>
                                      }
                                      sx={styles.outlinedInput}
                                  />
                                  <OutlinedInput
                                      placeholder="Email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      type="email"
                                      sx={styles.outlinedInput}
                                  />
                                  <Typography sx={styles.terms}>
                                      By registering you agree to our <span>Terms Of Use.</span>
                                  </Typography>
                              </Stack>
                          </form>
                      </Stack>
                  </Box>
      
                  <Button type="submit" variant="contained" sx={styles.signUpButton}>
                      Sign up & get access to the 1,000+ most active Youtube Sponsors in 30 languages
                  </Button>
      
                  <Typography sx={styles.signupPrompt}>
                      Do you have an account?{' '}
                      <Box component={Link} href="/sign-in" sx={styles.link}>
                          Login
                      </Box>
                  </Typography>
              </Stack>
          </Container>
      </Box>
    )
}