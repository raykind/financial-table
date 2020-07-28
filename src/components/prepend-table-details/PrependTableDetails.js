import React from "react";
import './PrependTableDetails.scss';
import {connect} from "react-redux";

const calculateOutcome = rows => {
  return arraySummingIncome(rows, false);
}

const calculateIncome = rows => {
  return arraySummingIncome(rows, true);
}

const arraySummingIncome = (rows, isIncome = true) => {
  return rows.reduce((sum, current) => {
    if (!isIncome && !current.isIncome) {
      return sum + Number(current.amount);
    }
    if (isIncome && current.isIncome) {
      return sum + Number(current.amount);
    }
    return sum
  }, 0);
}

const calculateDifference = rows => {
  return calculateIncome(rows) - calculateOutcome(rows);
}

const PrependTableDetails = ({rows}) => {
  return (
    <div className="prepend-details">
      <label>Outcome: </label>
      <span className="outcome-value">{calculateOutcome(rows)}</span>
      <label>Income: </label>
      <span className="income-value">{calculateIncome(rows)}</span>
      <label>Profit: </label>
      <span
        className={
          "profit-value " + (
            calculateDifference(rows) > 0
              ? "positive"
              : "negative"
          )
        }
      >{calculateDifference(rows)}</span>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rows: state.rows.rows
  }
}

export default connect(mapStateToProps)(PrependTableDetails);
