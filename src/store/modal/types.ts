export type TModalType = "info" | "edit" | "invite";

export interface IModalState {
  type: TModalType;
  isVisible: boolean;
  text: string;
}
