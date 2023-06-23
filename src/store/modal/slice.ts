import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IModalState, TModalType } from "./types";

const initialState: IModalState = {
  isVisible: false,
  type: "info",
  text: "",
};

const changeType = (state: IModalState, action: PayloadAction<TModalType>) => {
  state.type = action.payload;
};

const close = (state: IModalState) => {
  state.isVisible = false;
};

const open = (state: IModalState) => {
  state.isVisible = true;
};

const changeText = (state: IModalState, action: PayloadAction<string>) => {
  state.text = action.payload;
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: close,
    openModal: open,
    changeModalType: changeType,
    changeModalText: changeText,
  },
});

export default slice.reducer;

export const { closeModal, openModal, changeModalType, changeModalText } =
  slice.actions;
