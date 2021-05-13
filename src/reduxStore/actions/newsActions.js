"use strict";
exports.__esModule = true;
exports.getNewsArticles = void 0;
var types_1 = require("./types");
function getNewsArticles(newsData) {
    return {
        type: types_1.NewsActionTypes.GetNewsArticles,
        newsData: newsData
    };
}
exports.getNewsArticles = getNewsArticles;
