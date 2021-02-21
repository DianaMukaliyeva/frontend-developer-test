import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import useStyles from '../styles/styles.js';

const headCell = { id: 'date', numeric: true, disablePadding: false, label: 'Date' };

const TableHeader = ({ order, orderBy, onRequestSort, tableName }) => {
  const classes = useStyles();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell sortDirection={order}>
          <TableSortLabel
            active={!!order}
            direction={order}
            onClick={createSortHandler(headCell.id)}>
            Date
            {orderBy === headCell.id ? (
              <span className={classes.visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </span>
            ) : null}
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
  orderBy: PropTypes.string.isRequired,
  tableName: PropTypes.string.isRequired,
};

export default TableHeader;
