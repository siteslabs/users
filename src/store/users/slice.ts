import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IUsersState } from "./types";
import { defaultUsers } from "./const";
import { TUser } from "entities/Users";

const initialState: IUsersState = {
  users: defaultUsers,
  selectedUser: null,
};

const search = (state: IUsersState, action: PayloadAction<string>) => {
  state.users = state.users.filter(({ email }) =>
    email.includes(action.payload)
  );
};

const deleteUser = (state: IUsersState, action: PayloadAction<string>) => {
  state.users = state.users.filter(({ email }) => email !== action.payload);
};

const add = (state: IUsersState, action: PayloadAction<TUser>) => {
  state.users.unshift(action.payload);
};

const setEdit = (state: IUsersState, action: PayloadAction<TUser | null>) => {
  state.selectedUser = action.payload;
};

const edit = (state: IUsersState, action: PayloadAction<TUser>) => {
  state.users = state.users.map((user) => {
    if (user.id === state.selectedUser?.id) {
      return action.payload;
    }
    return user;
  });
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchUser: search,
    deleteUserByEmail: deleteUser,
    addUser: add,
    selectUser: setEdit,
    editUser: edit,
  },
});

export default slice.reducer;

export const { searchUser, deleteUserByEmail, addUser, editUser, selectUser } =
  slice.actions;
