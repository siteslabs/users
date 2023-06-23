import { TUser } from "entities/Users";

export interface IUsersState {
  users: TUser[];
  selectedUser: TUser | null;
}
