import { useCallback } from 'react';

import type { IForgotPasswordValues } from './types';
import type { FormikHelpers } from 'formik';

const useSignUpForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const signUpHandler = useCallback(
    (
      values: IForgotPasswordValues,
      {  }: FormikHelpers<IForgotPasswordValues>,
    ) => {
      console.log(values);
      // implement sign up logic here
    },
    [],
  );

  return { initialValues, signUpHandler };
};

export default useSignUpForm;
