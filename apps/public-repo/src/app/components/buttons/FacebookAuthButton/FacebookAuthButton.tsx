import { Button, Tooltip } from '@mui/material';
import React from 'react';

import { FacebookIcon } from '@/app/components';

const FacebookAuthButton = () => {
  return (
    <>
     <Tooltip
      title="Facebook"
      placement="top"
      arrow
    >
      <Button variant="social">
        {<FacebookIcon />}
      </Button>
    </Tooltip>
    </>
  );
};

export default FacebookAuthButton;
