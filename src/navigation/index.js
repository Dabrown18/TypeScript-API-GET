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
exports.replaceRoute = exports.setParams = exports.getCurrentRouteKey = exports.getCurrentRoute = exports.navigateBack = exports.navigate = exports.popNavigator = exports.pushNavigator = exports.navigationRef = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var native_1 = require("@react-navigation/native");
exports.navigationRef = react_1["default"].createRef();
var navigationRefsMap = {};
var keys = [];
var currentNavigatorKey;
function updateActiveNavigationRef() {
    if (currentNavigatorKey) {
        var currentNavigationRef = navigationRefsMap[currentNavigatorKey];
        exports.navigationRef.current = currentNavigationRef;
        if (!currentNavigationRef) {
            console.error("[navigation] - No NavigationRef with key [" + currentNavigatorKey + "] was found. Please make sure to push the Ref to the stack");
        }
    }
}
function pushNavigator(key, newNavigationRef) {
    var _a;
    if (!keys.includes(key)) {
        keys.push(key);
    }
    currentNavigatorKey = key;
    navigationRefsMap = __assign(__assign({}, navigationRefsMap), (_a = {}, _a[key] = newNavigationRef, _a));
    updateActiveNavigationRef();
}
exports.pushNavigator = pushNavigator;
function popNavigator(key) {
    delete navigationRefsMap[key];
    keys = keys.filter(function (x) { return x !== key; });
    currentNavigatorKey = lodash_1["default"].last(keys);
    updateActiveNavigationRef();
}
exports.popNavigator = popNavigator;
function navigate(key, params) {
    var _a;
    try {
        (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.navigate(key, params);
    }
    catch (_b) { }
}
exports.navigate = navigate;
function navigateBack() {
    var _a;
    (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.goBack();
}
exports.navigateBack = navigateBack;
function getCurrentRoute() {
    var _a;
    return (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.getCurrentRoute();
}
exports.getCurrentRoute = getCurrentRoute;
function getCurrentRouteKey() {
    var _a, _b;
    return ((_b = (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.getCurrentRoute()) === null || _b === void 0 ? void 0 : _b.key) || '';
}
exports.getCurrentRouteKey = getCurrentRouteKey;
function setParams(params) {
    var _a;
    (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.setParams(params);
}
exports.setParams = setParams;
function replaceRoute(name, params) {
    var _a;
    try {
        (_a = exports.navigationRef.current) === null || _a === void 0 ? void 0 : _a.dispatch(native_1.StackActions.replace(name, params));
    }
    catch (_b) { }
}
exports.replaceRoute = replaceRoute;
exports["default"] = exports.navigationRef;
