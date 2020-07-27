import React from "react";
import './Table.scss';
import {connect} from 'react-redux';
import TableRow from "../table-row/TableRow";

const getTableRows = (rows) => {
  return rows.map(row => <TableRow row={row} key={row.id}/>)
}

const Table = ({rows}) => {
  return (
    <table className="financial-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {getTableRows(rows)}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => {
  return {
    rows: state.rows.rows
  };
};

export default connect(mapStateToProps)(Table);
