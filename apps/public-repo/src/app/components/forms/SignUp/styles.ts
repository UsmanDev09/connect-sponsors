import { SxProps } from '@mui/material';

export const styles: { [key: string]: SxProps } = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#191153',
    },
    innerContainer: {
        width: '480.19px',
    },
    title: {
        fontSize: '34px',
        fontWeight: 700,
        color: '#fff',
        '& span': {
            color: '#FFA726',
        },
    },
    box: {
        width: '100%',
        background: 'linear-gradient(322deg, #191153, #3826B96B)',
        borderRadius: '15.97px',
        border: '1.06px solid white',
    },
    stack: {
        p: 3,
    },
    subtitle: {
        color: '#fff',
        mb: 0.5,
        fontWeight: 700,
        fontSize: '25.99px',
        textAlign: 'center',
    },
    description: {
        color: '#FFA51F',
        mb: 2,
        fontWeight: 500,
        fontSize: '18px',
    },
    socialButton: {
        width: '205.79px',
        height: '47.49px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
    },
    outlinedInput: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    },
    terms: {
        color: 'white',
        textAlign: 'center',
        '& span': {
            color: '#FFA726',
            textDecoration: 'underline',
            cursor: 'pointer',
        },
    },
    signUpButton: {
        width: '391px',
        borderRadius: '50px',
        padding: '10px 35px',
        backgroundColor: '#0e9e59',
        '&:hover': {
            backgroundColor: '#3fb87b',
        },
    },
    signupPrompt: {
        color: '#fff',
    },
    link: {
        color: '#FFA726',
        textDecoration: 'none',
        fontWeight: 500,
    },
    icon: {
        width: '14.07px',
        height: '8.79px',
    },
};