import handleError from "./handle-error";
import { User } from "../types";

export default function logout(usersList: User[]): User[] {
  try {
    const checkAuthUser: boolean = usersList.some(
      (user) => user.isAuth === true
    );
    if (!checkAuthUser) {
      throw new Error(`No authorized users`);
    }

    const logoutUser: number = usersList.findIndex(
      (user) => user.isAuth === true
    );
    // eslint-disable-next-line no-param-reassign
    usersList[logoutUser].isAuth = false;
    // eslint-disable-next-line no-console
    console.log(`See you later, ${usersList[logoutUser].username}!`);
  } catch (error) {
    handleError(error);
  }
  return usersList;
}
