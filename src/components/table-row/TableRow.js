import React from "react";

export default ({row}) => {
  return (
    <tr>
      <td>{row.date}</td>
      <td>{row.amount}</td>
      <td>{row.comment}</td>
    </tr>
  )
}
