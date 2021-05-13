import {NewsActionTypes} from "../actions/types";
import {NewsAction} from "../actions/newsActions";

interface NewsArticle {
  id: string,
  section: string,
  image: any,
  date: string,
  title: string,
  byline: string,
  url: string,
  liked: boolean,
}

export interface NewsArticles extends Array<NewsArticle>{}

export interface NewsState {
  isLoading: boolean;
  newsData: NewsArticles;
}

const initialState: NewsState = {
  isLoading: false,
  newsData: []
}

const {
  IsLoading,
  GetNewsArticles,
} = NewsActionTypes

export default function newsReducer(
  state: NewsState = initialState,
  action: NewsAction
): NewsState {
  switch (action.type) {
    case GetNewsArticles:
      return Object.assign({}, state, {
        isLoading: false,
        newsData: action.newsData
      });
  }
}
