import {combineReducers} from "redux";
import {rowsReducer} from "./rowsReducer";

export const rootReducer = combineReducers({
  rows: rowsReducer
})
