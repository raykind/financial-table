import React from "react";
import './TableRow.scss';

export default ({row}) => {
  return (
    <tr className={row.isIncome ? "income-row" : "outcome-row"}>
      <td>{row.date}</td>
      <td>{row.amount}</td>
      <td>{row.comment}</td>
    </tr>
  )
}
