"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.testable = void 0;
var redux_1 = require("redux");
var index_1 = __importDefault(require("./index"));
//TODO: this needs key redesign as reducers(states) are reducer functions!
var mergedReducers = redux_1.combineReducers(__assign({}, index_1["default"]));
exports.testable = { rootReducer: mergedReducers };