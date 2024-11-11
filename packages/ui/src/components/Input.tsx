import React from 'react';
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  InputLabel as MuiInputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';

export interface InputProps extends Omit<MuiTextFieldProps, 'size'> {
  label: string;
  helperText?: string;
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  size = 'medium',
  error = false,
  required = false,
  ...props
}) => {
  const heightMap = {
    small: '32px',
    medium: '40px',
    large: '48px',
  };

  return (
    <FormControl fullWidth error={error}>
      <MuiInputLabel
        shrink
        required={required}
        sx={{
          transform: 'translate(0, -1.5px) scale(0.75)',
          transformOrigin: 'top left',
        }}
      >
        {label}
      </MuiInputLabel>
      <MuiTextField
        variant="outlined"
        size={size === 'small' ? 'small' : 'medium'}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: heightMap[size],
          },
        }}
        error={error}
        {...props}
      />
      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};