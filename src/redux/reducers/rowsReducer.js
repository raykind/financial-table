import uniqueid from "lodash.uniqueid";
import {TOGGLE_NEW_ROW, PUSH_NEW_ROW} from "../types/types";

const initialState = {
  rows: [
    {
      id: uniqueid(),
      date: '13.07.2020',
      amount: '1000',
      comment: 'Лента'
    }
  ],
  isAdding: false
};

export const rowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NEW_ROW:
      return {
        ...state,
        isAdding: !state.isAdding
      }
    case PUSH_NEW_ROW:
      const {date, amount, comment} = action.payload;
      if (date && amount && comment) {
        return {
          ...state,
          rows: [
            ...state.rows,
            {
              id: uniqueid(),
              date,
              amount,
              comment
            }
          ]
        }
      }
      return state;
    default:
      return initialState;
  }
}
