import { createSlice } from "@reduxjs/toolkit";

import { ISidebarState } from "./types";

const initialState: ISidebarState = {
  isOpened: false,
};

const close = (state: ISidebarState) => {
  state.isOpened = false;
};

const open = (state: ISidebarState) => {
  console.log({ state });

  state.isOpened = true;
};

const slice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeSidebar: close,
    openSidebar: open,
  },
});

export default slice.reducer;

export const { openSidebar, closeSidebar } = slice.actions;
