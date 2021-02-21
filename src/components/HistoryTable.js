import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader.js';
import TableFooter from './TableFooter.js';

const descendingComparator = (a, b) => {
  if (b < a) return -1;
  if (b > a) return 1;
  return 0;
};

const getComparator = (order) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b)
    : (a, b) => -descendingComparator(a, b);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el) => [el]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0].date, b[0].date);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const createData = (date, id, oldValue, newName) => {
  return { date, id, oldValue, newName };
};

const HistoryTable = ({ getApiData, tableName }) => {
  const [order, setOrder] = React.useState('desc');
  const [rows, setRows] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const history = await getApiData();
      setRows([
        ...rows,
        ...history.data.map((user) =>
          createData(
            new Date(user.timestamp).toISOString().split('T')[0],
            user.id,
            user.diff[0].oldValue,
            user.diff[0].newValue,
          ),
        ),
      ]);
      setError(false);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRequestSort = () => {
    const isAsc = order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHeader tableName={tableName} order={order} onRequestSort={handleRequestSort} />
          <TableBody>
            {stableSort(rows, getComparator(order)).map((row) => {
              return (
                <TableRow hover key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.oldValue}</TableCell>
                  <TableCell>{row.newName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TableFooter error={error} loading={loading} fetchData={fetchData} />
      </TableContainer>
    </Paper>
  );
};

HistoryTable.propTypes = {
  getApiData: PropTypes.func.isRequired,
  tableName: PropTypes.string.isRequired,
};

export default HistoryTable;
