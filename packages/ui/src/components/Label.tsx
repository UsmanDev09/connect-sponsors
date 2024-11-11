import { Typography, TypographyProps } from '@mui/material';

export interface LabelProps extends Omit<TypographyProps, 'variant'> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  ...props
}) => {
  return (
    <Typography
      component="label"
      sx={{
        fontSize: '0.875rem',
        fontWeight: 500,
        color: 'text.primary',
        marginBottom: '0.5rem',
        display: 'block',
      }}
      {...props}
    >
      {children}
      {required && (
        <span style={{ color: '#dc2626', marginLeft: '4px' }}>*</span>
      )}
    </Typography>
  );
};