import {
  CombinedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import sidebar from "./sidebar/slice";
import users from "./users/slice";
import modal from "./modal/slice";
import { IAppState } from "./types";

const rootReducer = combineReducers<CombinedState<IAppState>>({
  sidebar,
  users,
  modal,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
const useAppDispatch: DispatchFunc = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, useAppDispatch, useAppSelector };
