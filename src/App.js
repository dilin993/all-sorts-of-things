import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: brown,
    secondary: {
      main: '#f44336',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
    </ThemeProvider>

  );
}

export default App;
