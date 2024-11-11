import { object, string } from 'yup';

import { USERNAME_REGEX, validationMessages } from '@/app/constants';

export const usernameSchema = object()
  .shape({
    username: string()
      .trim()
      .required()
      .min(0)
      .max(30)
      .matches(USERNAME_REGEX, validationMessages.username),
  })
  .required();
