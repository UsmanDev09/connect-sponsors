import { theme } from '@monorepo/ui';

import type { ISelectInputProps } from './types';

const useSelectInput = <
  V = string,
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  field,
  form: { touched, errors },
}: ISelectInputProps<V, FormValues>) => {
  const hasError = Boolean(touched[field.name] && errors[field.name]);

  const errorText = errors[field.name]?.toString();

  const adornmentColor = hasError
    ? theme.palette.error.main
    : (field.value as string)?.length
    ? theme.palette.primary.main
    : theme.palette.primary.main;

  return { hasError, errorText, adornmentColor };
};

export default useSelectInput;
