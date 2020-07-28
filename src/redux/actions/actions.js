import {TOGGLE_NEW_ROW, PUSH_NEW_ROW} from "../types/types";

export function toggleNewRow() {
  return {
    type: TOGGLE_NEW_ROW
  }
}

export function pushNewRow(newRow) {
  const {date, amount, comment, isIncome} = newRow;
  return {
    type: PUSH_NEW_ROW,
    payload: {
      date,
      amount,
      comment,
      isIncome
    }
  }
}
