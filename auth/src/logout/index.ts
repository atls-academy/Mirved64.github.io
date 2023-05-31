import { User }               from "../simple-auth.interfaces";
import { handleError }        from "../support-modules";
import { checkAuthUser }      from "../support-modules";
import { checkAuthUserIndex } from "../support-modules";

export const logout = (usersList: User[]): User[] => {
  try {
    if (!checkAuthUser(usersList)) {
      throw new Error(`No authorized users`);
    }
    const authUserIndex: number = checkAuthUserIndex(usersList);
    // eslint-disable-next-line no-param-reassign
    usersList[authUserIndex].isAuth = false;
    // eslint-disable-next-line no-console
    console.log(`See you later, ${usersList[authUserIndex].username}!`);
  } catch (error) {
    handleError(error);
  }
  return usersList;
}
