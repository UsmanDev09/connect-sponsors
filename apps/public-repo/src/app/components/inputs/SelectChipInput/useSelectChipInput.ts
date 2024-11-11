import { useCallback } from 'react';

import { errorMessages } from '@/app/constants';

import type { ISelectChipInputProps } from './types';

const useSelectInput = <
  V extends string[] = string[],
  FormValues extends Record<string, unknown> = Record<string, unknown>,
>({
  field: { name, value },
  form: { touched, errors, setFieldValue, setFieldError, setFieldTouched },
  max,
}: Omit<ISelectChipInputProps<V, FormValues>, 'options'>) => {
  const hasError = Boolean(touched[name] && errors[name]);
  const errorText = errors[name]?.toString();

  const handleChipClick = useCallback(
    (chipName: string) => () => {
      if (!touched[name]) {
        setFieldTouched(name, true);
      }
      if (value.includes(chipName)) {
        setFieldValue(name, [...value.filter((el) => el !== chipName)]);
        return;
      }
      if (max && value.length + 1 > max) {
        setFieldError(name, errorMessages.tooManyOptions);
        return;
      }
      setFieldValue(name, [...value, chipName]);
    },
    [setFieldTouched, touched, setFieldValue, setFieldError, name, value, max],
  );

  return { handleChipClick, hasError, errorText };
};

export default useSelectInput;
