import { Tooltip } from '@mui/material';
import { Button } from '@monorepo/ui';
import { LinkedInIcon } from '@/app/components';
import styles from '@/app/components/icons/styles';


import type { ILinkedinAuthButtonProps } from './types';

const LinkedinAuthButton = (props: ILinkedinAuthButtonProps) => {

  return (
    <Tooltip
      title="LinkedIn"
      placement="top"
      componentsProps={{
        tooltip: { sx: styles.tooltip },
        arrow: { sx: styles.arrow },
      }}
      arrow
    >
      <Button variant="social" {...props}>
        {<LinkedInIcon />}
      </Button>
    </Tooltip>
  );
};

export default LinkedinAuthButton;
