import React from "react";
import './TableRow.scss';

export default ({row}) => {
  return (
    <tr>
      <td>{row.date}</td>
      <td>{row.amount}</td>
      <td>{row.comment}</td>
    </tr>
  )
}
