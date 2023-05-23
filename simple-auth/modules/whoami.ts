import handleError from "./handle-error";
import { User } from "../types";


export default function whoami(usersList:User[]): void {
  try {
    const checkAuthUserIndex: number = usersList.findIndex(
      (user) => user.isAuth === true
    );
    if (checkAuthUserIndex === -1) {
      throw new Error(`No authorized users`);
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${usersList[checkAuthUserIndex].username}`);

  } catch (error) {
    handleError(error);
  }
}