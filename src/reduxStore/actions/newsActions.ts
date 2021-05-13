import {Action} from "redux";
import {NewsActionTypes} from "./types";
import {NewsArticles} from "../reducers/newsReducer";

export type NewsAction =
  | IsLoading
  | GetNewsArticles;

export interface IsLoading extends Action {
  type: NewsActionTypes.IsLoading;
  isLoading: boolean;
}

export interface GetNewsArticles extends Action {
  type: NewsActionTypes.GetNewsArticles;
  newsData: NewsArticles
}

export function getNewsArticles(newsData): GetNewsArticles {
  return {
    type: NewsActionTypes.GetNewsArticles,
    newsData
  };
}
