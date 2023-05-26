import handleError from "./handle-error";
import { User } from "../types";
import checkAuthUser from "./check-auth-user";
import checkAuthUserIndex from "./check-auth-user-index";

export default async function logout(usersList: User[]): Promise<User[]> {
  try {
    if (!(await checkAuthUser(usersList))) {
      throw new Error(`No authorized users`);
    }
    const authUserIndex: number = await checkAuthUserIndex(usersList);
    // eslint-disable-next-line no-param-reassign
    usersList[authUserIndex].isAuth = false;
    // eslint-disable-next-line no-console
    console.log(`See you later, ${usersList[authUserIndex].username}!`);
  } catch (error) {
    handleError(error);
  }
  return usersList;
}
