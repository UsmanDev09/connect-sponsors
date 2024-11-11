import { theme } from '@monorepo/ui';

const styles = {
  root: (isSelected: boolean) => ({
    ...(isSelected && {
      border: `1.5px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    }),
  }),
} as const;

export default styles;
