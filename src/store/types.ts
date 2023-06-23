import { ISidebarState } from "./sidebar/types";
import { IModalState } from "./modal/types";
import { IUsersState } from "./users/types";

export interface IAppState {
  sidebar: ISidebarState;
  users: IUsersState;
  modal: IModalState;
}
