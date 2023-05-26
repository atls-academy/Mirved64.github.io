import handleError from "./handle-error";
import { User } from "../types";
import checkAuthUserIndex from "./check-auth-user-index";

export default async function whoami(usersList: User[]): Promise<void> {
  try {
    const userIndex: number = await checkAuthUserIndex(usersList)
    if (userIndex === -1) {
      throw new Error(`No authorized users`);
    }
    // eslint-disable-next-line no-console
    console.log(
      `You are ${usersList[userIndex].username}`
    );
  } catch (error) {
    handleError(error);
  }
}
