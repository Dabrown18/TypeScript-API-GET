import React from 'react';
import _ from 'lodash';
import {NavigationContainerRef, StackActions} from '@react-navigation/native';

export const navigationRef: React.MutableRefObject<NavigationContainerRef> =
  React.createRef() as React.MutableRefObject<NavigationContainerRef>;

interface NavigationRefType {
  [key: string]: NavigationContainerRef;
}

let navigationRefsMap: NavigationRefType = {};
let keys: string[] = [];
let currentNavigatorKey: string | undefined;


function updateActiveNavigationRef() {
  if (currentNavigatorKey) {
    const currentNavigationRef = navigationRefsMap[currentNavigatorKey];
    navigationRef.current = currentNavigationRef;
    if (!currentNavigationRef) {
      console.error(
        `[navigation] - No NavigationRef with key [${currentNavigatorKey}] was found. Please make sure to push the Ref to the stack`,
      );
    }
  }
}

export function pushNavigator(key: string, newNavigationRef: NavigationContainerRef) {
  if (!keys.includes(key)) {
    keys.push(key);
  }
  currentNavigatorKey = key;
  navigationRefsMap = {
    ...navigationRefsMap,
    [key]: newNavigationRef,
  };
  updateActiveNavigationRef();
}

export function popNavigator(key: string) {
  delete navigationRefsMap[key];
  keys = keys.filter((x) => x !== key);
  currentNavigatorKey = _.last(keys);
  updateActiveNavigationRef();
}

export function navigate(key: string, params?: object) {
  try {
    navigationRef.current?.navigate(key, params);
  } catch {}
}

export function navigateBack() {
  navigationRef.current?.goBack();
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute();
}

export function getCurrentRouteKey(): string {
  return navigationRef.current?.getCurrentRoute()?.key || '';
}

export function setParams(params: object | undefined) {
  navigationRef.current?.setParams(params);
}

export function replaceRoute(name: string, params?: object) {
  try {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  } catch {}
}

export default navigationRef;
