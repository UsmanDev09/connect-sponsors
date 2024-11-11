import { Button, Tooltip } from '@mui/material';

import { GoogleIcon } from '@/app/components';
import styles from '@/app/components/icons/styles';


import type { IGoogleAuthButtonProps } from './types';

const GoogleAuthButton = (props: IGoogleAuthButtonProps) => {

  return (
    <Tooltip
      title="Google"
      placement="top"
      componentsProps={{
        tooltip: { sx: styles.tooltip },
        arrow: { sx: styles.arrow },
      }}
      arrow
    >
      <Button variant="social" {...props}>
        {<GoogleIcon />}
      </Button>
    </Tooltip>
  );
};

export default GoogleAuthButton;
