import { outlinedInputClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Gilroy } from '@monorepo/utils';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      social: true;
    }
  }
  
export const theme = createTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: null,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          containedPrimary: {
            fontFamily: `${Gilroy.style.fontFamily},Poppins`,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            backgroundColor: '#886FFF',
            color: '#FFFFFF',
            borderRadius: '8px',
            padding: '13px 20px 15px',
            '&:active, &:focus, &:hover': {
              backgroundColor: '#6A51E1',
            },
            '&:disabled': {
              backgroundColor: '#886FFF1A',
              color: '#886FFF99',
            },
          },
          containedSecondary: {
            fontFamily: `${Gilroy.style.fontFamily},Poppins`,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            backgroundColor: '#FFFFFF',
            color: '#6C629B',
            borderRadius: '8px',
            padding: '12px 20px 14px',
            border: '1.5px solid #FFFFFF',
            '&:active, &:focus, &:hover': {
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #886FFF',
            },
            '&:disabled': {
              backgroundColor: '#E6E1EE',
              color: '#A09BA8',
              border: '1.5px solid #DCD7E4',
            },
          },
        },
        variants: [
          {
            props: { variant: 'social' },
            style: {
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              padding: '19px',
              border: '1.5px solid #FFFFFF',
              '&:active, &:focus, &:hover': {
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #8674DB',
                boxShadow: ' 0px 0px 0px 2px #8674DB1A',
              },
              '&:disabled': {
                backgroundColor: '#FFFFFF',
                color: '#bdbdbd',
                border: '1.5px solid #FFFFFF',
              },
            },
          },
        ],
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            '@media (min-width:900px)': {
              paddingLeft: '16px',
              paddingRight: '16px',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            [`&.${outlinedInputClasses.root}`]: {
              padding: 0,
              borderRadius: '8px',
              border: '1.5px solid #FFFFFF',
              backgroundColor: '#FFFFFF',
              '&:hover': {
                border: '1.5px solid #886FFF',
                boxShadow: '0px 0px 0px 2.5px #8674DB1A',
              },
              '&:active, &.Mui-focused': {
                border: '1.5px solid #BDAFFF',
                boxShadow: 'none',
              },
  
              fieldset: {
                border: 'none',
                top: 0,
                legend: {
                  display: 'none',
                },
              },
            },
            '& input::placeholder': {
              color: '#D2CFD7',
              fontFamily: `${Gilroy.style.fontFamily},Poppins`,
              opacity: 1,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
            },
          },
          input: {
            [`&.${outlinedInputClasses.input}`]: {
              height: 'auto',
              padding: '13px 12px',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '20px',
              color: '#2C2535',
            },
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 30px #FFFFFF inset',
            },
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            margin: 0,
            color: 'currentColor',
          },
          positionStart: {
            marginLeft: '12px',
          },
          positionEnd: {
            marginRight: '12px',
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            backgroundColor: '#fff',
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 700,
            color: '#46505A',
            borderColor: '#E5E8EC',
            '&.Mui-selected': {
              borderColor: '#007FFF !important',
              color: '#007FFF',
              backgroundColor: '#F0F7FF',
            },
          },
        },
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: `${Gilroy.style.fontFamily}, Poppins,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
      h1: {
        fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
        fontWeight: 800,
        lineHeight: 1.1142857142857143,
        color: '#0A1929',
      },
      h2: {
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '32px',
        color: '#2C2535',
      },
      h3: {
        fontSize: '24px',
        lineHeight: 1,
        fontWeight: 400,
      },
      h4: {
        fontSize: '1.75rem',
        lineHeight: 1.5,
        letterSpacing: 0,
        fontWeight: 400,
      },
      h5: {
        fontSize: '1.5rem',
        lineHeight: 1.5,
        letterSpacing: 0,
        fontWeight: 400,
      },
      h6: {
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: 0,
        fontWeight: 400,
        color: '#2C2535',
      },
      button: {
        textTransform: 'initial',
        fontWeight: 700,
        letterSpacing: 0,
        fontSize: '0.875rem',
        lineHeight: 1.75,
      },
      subtitle1: {
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
        color: '#908C97',
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: 1.25,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: 0,
        fontWeight: 400,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: 0,
        fontWeight: 400,
      },
      caption: {
        color: '#908C97',
        opacity: 0.7,
        display: 'inline-block',
        fontSize: '16px',
        lineHeight: 1.5,
        letterSpacing: 0,
        fontWeight: 500,
      },
      overline: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
        textTransform: 'uppercase',
      },
    },
    shadows: [
      'none',
      '0px 0px 0px 2.5px #8674DB1A', //1 inputs hover
      '0px 24px 64px 0px #C8C3D066', //2 option button
      '0px 3px 3px -2px rgba(0,0,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.07),0px 1px 8px 0px rgba(0,0,0,0.06)',
      '0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.07),0px 1px 10px 0px rgba(0,0,0,0.06)',
      '0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.07),0px 1px 14px 0px rgba(0,0,0,0.06)',
      '0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.07),0px 1px 18px 0px rgba(0,0,0,0.06)',
      '0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.07),0px 2px 16px 1px rgba(0,0,0,0.06)',
      '0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.07),0px 3px 14px 2px rgba(0,0,0,0.06)',
      '0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.07),0px 3px 16px 2px rgba(0,0,0,0.06)',
      '0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.07),0px 4px 18px 3px rgba(0,0,0,0.06)',
      '0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.06)',
      '0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.07),0px 5px 22px 4px rgba(0,0,0,0.06)',
      '0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.07),0px 5px 24px 4px rgba(0,0,0,0.06)',
      '0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.07),0px 5px 26px 4px rgba(0,0,0,0.06)',
      '0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.07),0px 6px 28px 5px rgba(0,0,0,0.06)',
      '0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.07),0px 6px 30px 5px rgba(0,0,0,0.06)',
      '0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.07),0px 6px 32px 5px rgba(0,0,0,0.06)',
      '0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.07),0px 7px 34px 6px rgba(0,0,0,0.06)',
      '0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.07),0px 7px 36px 6px rgba(0,0,0,0.06)',
      '0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.07),0px 8px 38px 7px rgba(0,0,0,0.06)',
      '0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.07),0px 8px 40px 7px rgba(0,0,0,0.06)',
      '0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.07),0px 8px 42px 7px rgba(0,0,0,0.06)',
      '0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.07),0px 9px 44px 8px rgba(0,0,0,0.06)',
      '0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.07),0px 9px 46px 8px rgba(0,0,0,0.06)',
    ],
  });