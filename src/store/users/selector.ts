import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/index";
import { IUsersState } from "./types";

export const selectState = (state: RootState) => state.users;

export const selectUsers = createSelector(
  selectState,
  (state: IUsersState) => state.users
);

export const selectSelectedUser = createSelector(
  selectState,
  (state: IUsersState) => state.selectedUser
);
