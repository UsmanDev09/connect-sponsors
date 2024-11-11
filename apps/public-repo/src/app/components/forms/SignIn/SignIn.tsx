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

export default function SignIn() {
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
                          <Typography variant="h2" align="center" sx={styles.loginTitle}> 
                              Login
                          </Typography>
                          <Typography variant="subtitle1" align="center" sx={styles.loginSubtitle}> 
                              To Find & Close Your Sponsors
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
                                      placeholder="Email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      type="email"
                                      sx={styles.outlinedInput} 
                                  />
                                  <OutlinedInput
                                      fullWidth
                                      placeholder="Password"
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
                              </Stack>
                          </form>
                      </Stack>
                      <Button href="/forgot-password" sx={styles.forgotPasswordButton}> 
                          Forgot password?
                      </Button>
                  </Box>

                  <Button type="submit" variant="contained" sx={styles.loginButton}> 
                      Login App
                  </Button>

                  <Typography sx={styles.loginPrompt}>
                    Dont you have an account?{' '}
                    <Box component={Link} href="/" sx={styles.loginLink}>
                      Sign up
                    </Box>
                  </Typography>
              </Stack>
          </Container>
      </Box>
    )
}