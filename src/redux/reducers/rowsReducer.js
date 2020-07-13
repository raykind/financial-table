import uniqueid from "lodash.uniqueid";
import {ADD_NEW_ROW} from "../types/types";

const initialState = {
  rows: [
    {
      id: uniqueid(),
      date: '13.07.2020',
      amount: '1000',
      comment: 'Лента'
    }
  ]
};

export const rowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ROW:
      return {
        ...state,
        rows: [
          ...state.rows,
          action.payload
        ]
      }
    default:
      return initialState;
  }
}
