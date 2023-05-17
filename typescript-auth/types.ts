export interface IUserInfo {
  username: string;
  password: string;
}

export type UserIsAurh = {
  isAuth: boolean;
  user: Partial<IUserInfo>;
};
