import { LOGIN_BEFORE } from "../constants";
import { handleError } from "./handle-error";
import { User } from "../types";

/*  eslint-disable @typescript-eslint/no-unused-vars  */
export default function whoami(currentUser:User): void {
  try {
    if (!currentUser.isAuth) {
      throw new Error(LOGIN_BEFORE);
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${currentUser.username}`);
    // eslint-disable-next-line no-alert
    alert(`You are ${currentUser.username}`);
  } catch (error) {
    handleError(error);
  }
}
/*  eslint-enable @typescript-eslint/no-unused-vars */