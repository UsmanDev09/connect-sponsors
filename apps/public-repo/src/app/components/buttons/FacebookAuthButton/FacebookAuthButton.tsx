import { Tooltip } from '@mui/material';
import { Button } from '@monorepo/ui';
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
