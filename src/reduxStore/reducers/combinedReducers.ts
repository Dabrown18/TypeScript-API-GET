import {combineReducers} from "redux";
import rootReducer, {
  StoreState,
} from "./index";

export type CombinedState = StoreState;
//TODO: this needs key redesign as reducers(states) are reducer functions!
const mergedReducers = combineReducers<CombinedState>({
  ...rootReducer,
});

export const testable = {rootReducer: mergedReducers};
