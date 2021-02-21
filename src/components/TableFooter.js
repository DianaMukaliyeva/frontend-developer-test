import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import useStyles from '../styles/styles.js';

const TableFooter = ({ error, loading, fetchData }) => {
  const classes = useStyles();

  return (
    <Box p={3} textAlign="center">
      {error && (
        <Box p={1}>
          <Typography color="error">
            We had problems fetching your data. Please try again.
          </Typography>
        </Box>
      )}
      {loading ? (
        <CircularProgress color="primary" className={classes.blueColor} />
      ) : (
        <Button disableElevation variant="contained" color="primary" onClick={fetchData}>
          {error ? 'Retry' : 'Load more'}
        </Button>
      )}
    </Box>
  );
};

TableFooter.propTypes = {
  fetchData: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TableFooter;
