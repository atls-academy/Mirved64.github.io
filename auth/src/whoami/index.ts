import handleError from "../support-modules/support-modules.handle-error";
import { User } from "../simple-auth.interfaces";
import checkAuthUserIndex from "../support-modules/support-modules.check-auth-user-index";

export default async function whoami(usersList: User[]): Promise<void> {
  try {
    const userIndex: number = await checkAuthUserIndex(usersList);
    if (userIndex === -1) {
      throw new Error(`No authorized users`);
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${usersList[userIndex].username}`);
  } catch (error) {
    handleError(error);
  }
}
