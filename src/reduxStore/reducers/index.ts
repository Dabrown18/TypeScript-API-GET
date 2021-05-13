import newsReducer, {NewsState} from "./newsReducer";

export interface StoreState {
  news?: NewsState
}

const rootReducer = {
  ...newsReducer
};

export default rootReducer;
