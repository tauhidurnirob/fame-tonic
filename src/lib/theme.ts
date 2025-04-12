import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
    primary: {
      main: '#00E7F9',
    },
    secondary: {
      main: '#FC004E',
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#00E7F9",
    },
    grey: {
      100: "#ABABAB"
    }
  },
  typography: {
    fontFamily: 'Figtree, sans-serif',
    h1: {
      fontSize: '35px',
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      [`@media (max-width:600px)`]: {
        fontSize: '25px',
      },
    }
  }
});

export default theme;