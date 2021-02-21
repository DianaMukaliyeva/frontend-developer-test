import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2197F3',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
