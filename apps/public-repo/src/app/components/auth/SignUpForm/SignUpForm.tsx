import { Box, InputAdornment } from '@mui/material';
import { Button } from '@monorepo/ui';
import { Formik, Form, Field } from 'formik';

import { LetterIcon } from '@/app/components';
import { PasswordInput, TextInput } from '@/app/components/inputs';

import { schema } from './schema';
import styles from './styles';
import useForgotPassword from './useSignUpForm';

const SignUpForm = () => {
  const { initialValues, signUpHandler } = useForgotPassword();

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={signUpHandler}>
      {({ isSubmitting }) => (
        <Box sx={styles.container}>
          <Form style={styles.form}>
            <Field
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              fullWidth
              component={TextInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LetterIcon width={20} height={20} />
                  </InputAdornment>
                ),
              }}
            />
            <Field
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              fullWidth
              component={PasswordInput}
            />
            <Field
              name="confirmPassword"
              autoComplete="current-password"
              placeholder="Confirm your password"
              fullWidth
              component={PasswordInput}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Sign up
            </Button>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default SignUpForm;
