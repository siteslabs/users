import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/index";
import { IModalState } from "./types";

export const selectState = (state: RootState) => state.modal;

export const selectIsModalVisible = createSelector(
  selectState,
  (state: IModalState) => state.isVisible
);

export const selectModalText = createSelector(
  selectState,
  (state: IModalState) => state.text
);

export const selectModalType = createSelector(
  selectState,
  (state: IModalState) => state.type
);
