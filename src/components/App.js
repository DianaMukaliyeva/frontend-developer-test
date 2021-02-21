import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';

import api from '../lib/api';
import HistoryTable from './HistoryTable.js';
import theme from '../styles/theme.js';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Box m={10}>
          <HistoryTable getApiData={api.getUsersDiff} tableName="User" />
        </Box>
        <Box m={10}>
          <HistoryTable getApiData={api.getProjectsDiff} tableName="Project" />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
