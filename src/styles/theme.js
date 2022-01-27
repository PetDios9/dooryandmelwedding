import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const font = "'Bentham', serif;";

const theme = createTheme({
  palette: {
    primary: {
      main: '#800020',
    },
    background: {
      default: '#fcfcfc',
    },
  },
  typography: {
    fontFamily: font,
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
