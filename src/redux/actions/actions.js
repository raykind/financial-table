import {ADD_NEW_ROW} from "../types/types";
import uniqueid from "lodash.uniqueid";

export function addNewRow() {
  return {
    type: ADD_NEW_ROW,
    payload: {
      id: uniqueid(),
      date: '13.07.2020',
      amount: '500',
      comment: 'Лента'
    }
  }
}
