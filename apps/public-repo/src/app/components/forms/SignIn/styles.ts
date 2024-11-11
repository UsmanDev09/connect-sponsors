import { SxProps } from '@mui/material'

export const styles: { [key: string]: SxProps } = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
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
      p:3
    },
    loginTitle: {
        color: '#fff',
        mb: 0.5,
        fontWeight: 700,
        fontSize: '28.17px',
    },
    loginSubtitle: {
        color: '#fff',
        mb: 2,
        fontWeight: 400,
        fontSize: '17.59px',
    },
    socialButton: {
        width: '205.79px',
        height: '47.49px',
        fontWeight: '500',
    },
    outlinedInput: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
    },
    forgotPasswordButton: {
        color: 'white',
        backgroundColor: '#FFA726',
        alignItems: 'flex-end',
        justifyItems: 'flex-center',
        width: '100%',
        mt: '5%',
        borderBottomLeftRadius: '15.97px',
        borderBottomRightRadius: '15.97px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
    },
    loginButton: {
        width: '170px',
        borderRadius: '50px',
        padding: '10px 35px',
        backgroundColor: '#0e9e59',
        '&:hover': {
            backgroundColor: '#3fb87b',
        },
    },
    loginPrompt: {
        color: '#fff',
    },
    loginLink: {
        color: '#FFA726',
        textDecoration: 'none',
        fontWeight: 500,
    },
}