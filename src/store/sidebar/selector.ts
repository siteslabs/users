import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/index";
import { ISidebarState } from "./types";

export const selectState = (state: RootState) => state.sidebar;

export const selectIsSidebarOpened = createSelector(
  selectState,
  (state: ISidebarState) => state.isOpened
);
