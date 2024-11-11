import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {
  underline?: 'none' | 'hover' | 'always';
}

export const Link: React.FC<LinkProps> = ({
  children,
  underline = 'hover',
  ...props
}) => {
  return (
    <MuiLink
      underline={underline}
      sx={{
        color: 'primary.main',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      {...props}
    >
      {children}
    </MuiLink>
  );
};