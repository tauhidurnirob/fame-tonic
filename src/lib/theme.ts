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
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;