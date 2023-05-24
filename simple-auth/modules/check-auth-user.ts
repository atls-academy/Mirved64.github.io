import { User } from "../types";

export default function checkAuthUser(usersList: User[]): boolean {
  const userIsAuth: boolean = usersList.some((user) => user.isAuth === true);
  return userIsAuth
}
