import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import useStyles from '../styles/styles.js';

const TableHeader = ({ order, onRequestSort, tableName }) => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell sortDirection={order}>
          <TableSortLabel direction={order} onClick={onRequestSort}>
            Date
            <span className={classes.visuallyHidden}>
              {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
            </span>
          </TableSortLabel>
        </TableCell>
        <TableCell>{tableName} ID</TableCell>
        <TableCell>Old value</TableCell>
        <TableCell>New value</TableCell>
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  tableName: PropTypes.string.isRequired,
};

export default TableHeader;
