export type TUser = {
  name?: string;
  email: string;
  permissions?: string[];
  image?: string;
  isAuthorized: boolean;
  id: number;
};
