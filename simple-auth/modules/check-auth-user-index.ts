import { User } from "../types";

export default function checkAuthUserIndex(usersList: User[]): number {
  const authUserIndex = usersList.findIndex((user) => user.isAuth === true);
  return authUserIndex;
}
