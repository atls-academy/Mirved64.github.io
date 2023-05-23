import { handleError } from "./handle-error";
import { LOGIN_BEFORE } from "./constants";
import { User } from "./types";

/*  eslint-disable @typescript-eslint/no-unused-vars  */
export function logout(currentUser:User): User {
  try {
    if (!currentUser.isAuth) {
      throw new Error(LOGIN_BEFORE);
    }
    currentUser.isAuth = false;
    // eslint-disable-next-line no-alert
    alert(`See you later, ${currentUser.username}!`);
    
  } catch (error) {
    handleError(error);
  }
  return {
    username: "",
    password: "",
    isAuth: false,
  };
}
/*  eslint-enable @typescript-eslint/no-unused-vars */
