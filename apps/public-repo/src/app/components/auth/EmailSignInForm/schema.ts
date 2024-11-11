import { object, string } from 'yup';

import { emailSchema } from '@/app/validations';

export const schema = object({
  password: string().trim().required(),
})
  .concat(emailSchema)
  .required();
