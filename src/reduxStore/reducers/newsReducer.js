"use strict";
exports.__esModule = true;
var types_1 = require("../actions/types");
var initialState = {
    isLoading: false,
    newsData: []
};
var IsLoading = types_1.NewsActionTypes.IsLoading, GetNewsArticles = types_1.NewsActionTypes.GetNewsArticles;
function newsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case GetNewsArticles:
            return Object.assign({}, state, {
                isLoading: false,
                newsData: action.newsData
            });
    }
}
exports["default"] = newsReducer;
