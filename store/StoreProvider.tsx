"use client";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

export const StoreProvider = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
