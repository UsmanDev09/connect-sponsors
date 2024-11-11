import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'contained',
  fullWidth = false,
  ...props
}) => {
  const heightMap = {
    small: '32px',
    medium: '40px',
    large: '48px',
  };

  const fontSizeMap = {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
  };

  return (
    <MuiButton
      variant={variant}
      sx={{
        height: heightMap[size],
        fontSize: fontSizeMap[size],
        width: fullWidth ? '100%' : 'auto',
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};