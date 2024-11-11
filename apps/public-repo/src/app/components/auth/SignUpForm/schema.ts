import { object } from 'yup';

import { confirmPasswordSchema, emailSchema, passwordSchema } from '@/app/validations';

export const schema = object()
  .concat(emailSchema)
  .concat(passwordSchema)
  .concat(confirmPasswordSchema)
  .required();
