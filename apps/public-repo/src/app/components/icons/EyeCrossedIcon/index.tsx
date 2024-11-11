import { SvgIcon } from '@mui/material';

import { combineSx } from '@/app/utils';

import styles from '../styles';

import type { ISvgProps } from '../types';

const EyeCrossedIcon = ({
  viewBox = '0, 0, 22, 15',
  width = '24',
  height = '24',
  fill = 'currentColor',
  direction = 'up',
  sx,
  ...rest
}: ISvgProps) => {
  return (
    <SvgIcon
      viewBox={viewBox}
      width={width}
      height={height}
      sx={combineSx(styles.root, styles[direction], sx)}
      {...rest}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M11 14.0078C9.96875 14.0078 8.99219 13.8828 8.07031 13.6328C7.14844 13.3828 6.29427 13.0521 5.50781 12.6406C4.72135 12.2292 4.01302 11.776 3.38281 11.2812C2.75781 10.7865 2.22135 10.2891 1.77344 9.78906C1.33073 9.28906 0.992188 8.82812 0.757812 8.40625C0.523438 7.97917 0.40625 7.63281 0.40625 7.36719C0.40625 7.13281 0.497396 6.83333 0.679688 6.46875C0.867188 6.10417 1.13542 5.70573 1.48438 5.27344C1.83333 4.84115 2.2526 4.40625 2.74219 3.96875C3.23698 3.52604 3.79167 3.11198 4.40625 2.72656L7.07812 5.41406C6.93229 5.70573 6.82031 6.01823 6.74219 6.35156C6.66406 6.67969 6.625 7.01823 6.625 7.36719C6.625 7.96094 6.73698 8.52083 6.96094 9.04688C7.1901 9.56771 7.5026 10.0312 7.89844 10.4375C8.29948 10.8385 8.76302 11.1536 9.28906 11.3828C9.82031 11.6068 10.3906 11.7188 11 11.7188C11.3438 11.7188 11.6771 11.6797 12 11.6016C12.3281 11.5234 12.6354 11.4089 12.9219 11.2578L14.9688 13.3047C14.3802 13.5234 13.7526 13.6953 13.0859 13.8203C12.4193 13.9453 11.724 14.0078 11 14.0078ZM17.8125 11.875L15 9.03125C15.1198 8.78125 15.2109 8.51562 15.2734 8.23438C15.3359 7.95312 15.3672 7.66406 15.3672 7.36719C15.3672 6.75781 15.2526 6.1901 15.0234 5.66406C14.7995 5.13802 14.487 4.67708 14.0859 4.28125C13.6901 3.88021 13.2266 3.57031 12.6953 3.35156C12.1693 3.1276 11.6042 3.01562 11 3.01562C10.6979 3.01562 10.4062 3.04688 10.125 3.10938C9.84375 3.16667 9.57552 3.25 9.32031 3.35938L7.28906 1.32812C7.85677 1.14062 8.45052 0.994792 9.07031 0.890625C9.6901 0.78125 10.3333 0.726562 11 0.726562C12.0417 0.726562 13.0234 0.851562 13.9453 1.10156C14.8724 1.35156 15.7292 1.68229 16.5156 2.09375C17.3021 2.50521 18.0078 2.95833 18.6328 3.45312C19.2578 3.94792 19.7891 4.44531 20.2266 4.94531C20.6693 5.44531 21.0052 5.90885 21.2344 6.33594C21.4688 6.75781 21.5859 7.10156 21.5859 7.36719C21.5859 7.67969 21.4297 8.09375 21.1172 8.60938C20.8047 9.125 20.3646 9.67448 19.7969 10.2578C19.2344 10.8359 18.5729 11.375 17.8125 11.875ZM8.50781 7.1875C8.50781 7.13542 8.50781 7.08073 8.50781 7.02344C8.51302 6.96615 8.51823 6.90885 8.52344 6.85156L11.3281 9.65625C11.2708 9.66146 11.2161 9.66667 11.1641 9.67188C11.112 9.67188 11.0599 9.67188 11.0078 9.67188C10.5495 9.67188 10.1302 9.5599 9.75 9.33594C9.375 9.11198 9.07292 8.8125 8.84375 8.4375C8.61979 8.0625 8.50781 7.64583 8.50781 7.1875ZM13.4844 7.20312C13.4844 7.25521 13.4818 7.30729 13.4766 7.35938C13.4766 7.41146 13.474 7.46094 13.4688 7.50781L10.7031 4.74219C10.75 4.73698 10.7969 4.73438 10.8438 4.73438C10.8958 4.72917 10.9479 4.72656 11 4.72656C11.4635 4.72656 11.8828 4.83854 12.2578 5.0625C12.6328 5.28125 12.9297 5.58073 13.1484 5.96094C13.3724 6.33594 13.4844 6.75 13.4844 7.20312ZM17.0781 14.1328L4.00781 1.07812C3.89323 0.963542 3.83594 0.822917 3.83594 0.65625C3.83594 0.484375 3.89323 0.341146 4.00781 0.226562C4.1276 0.106771 4.27083 0.0494792 4.4375 0.0546875C4.60938 0.0546875 4.7526 0.111979 4.86719 0.226562L17.9297 13.2812C18.0495 13.401 18.112 13.5391 18.1172 13.6953C18.1224 13.8568 18.0599 14.0026 17.9297 14.1328C17.8099 14.263 17.6667 14.3255 17.5 14.3203C17.3385 14.3151 17.1979 14.2526 17.0781 14.1328Z"
        fill={fill}
      />
    </SvgIcon>
  );
};

export default EyeCrossedIcon;
