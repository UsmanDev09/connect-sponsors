import { alpha, outlinedInputClasses } from '@mui/material';

import { theme } from '@monorepo/ui';

const commonStyles = {
  optionHover: {
    '&:hover, &:active, &.Mui-focused': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.secondary.main,
    },
  },
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  root: {
    height: 49,
    [`&.${outlinedInputClasses.root}`]: {
      '&:active, &.Mui-focused': {
        border: `1.5px solid ${theme.palette.common.white}`,
        boxShadow: theme.shadows[0],
      },
      '&.Mui-focused:hover': {
        border: `1.5px solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[1],
      },
    },
  },
  placeholder: {
    color: theme.palette.primary.main,
    fontFamily: 'Poppins',
    opacity: 1,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
  },

  option: {
    padding: 1.5,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    borderRadius: 0.5,
    display: 'flex',
    gap: 0.5,
    svg: {
      width: 14,
      height: 18,
      color: theme.palette.primary.main,
    },
    ...commonStyles.optionHover,
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.common.white,
      ...commonStyles.optionHover,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      '&.Mui-focusVisible': {
        backgroundColor: theme.palette.common.white,
      },
      ...commonStyles.optionHover,
    },
  },
  icon: {
    ['&.MuiSelect-icon']: {
      width: 20,
      height: 20,
      color: theme.palette.primary.main,
      top: 'calc(50% - 10px)',
      right: 16,
    },
  },
} as const;
export default styles;
