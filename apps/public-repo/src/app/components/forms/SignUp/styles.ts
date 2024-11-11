import { theme } from '@monorepo/ui';

const styles = {
  root: {
    width: 456,
    height: 'auto',
    padding: 3,
    gap: 4.5,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 3,
    margin: theme.spacing(1.25, 0),
  },
  titleIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(0, 5.25),
    gap: 1,
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: 2,
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2.5,
    width: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    gap: 1.5,
    width: '100%',
  },
  bottomLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.5,
  },
} as const;

export default styles;
