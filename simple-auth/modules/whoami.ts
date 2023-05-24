import handleError from "./handle-error";
import { User } from "../types";
import checkAuthUserIndex from "./check-auth-user-index";


export default function whoami(usersList:User[]): void {
  try {
    if (checkAuthUserIndex(usersList) === -1) {
      throw new Error(`No authorized users`);
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${usersList[checkAuthUserIndex(usersList)].username}`);

  } catch (error) {
    handleError(error);
  }
}