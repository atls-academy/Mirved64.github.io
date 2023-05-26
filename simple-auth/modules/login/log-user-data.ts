import { User } from "../../types";
import checkAuthUser from "../check-auth-user";
import { ENTER_USERNAME, ENTER_PASSWORD, WORK_STOP } from "../../constants";
import login from "./login";
import handleError from "../handle-error";

export default async function loginUser(usersList: User[]): Promise<User[]> {
  try {
    if (await checkAuthUser(usersList)) {
      throw new Error("Please logout before login!");
    }
    // eslint-disable-next-line no-alert
    const existUserUsername: string | null = prompt(ENTER_USERNAME);
    if (existUserUsername === null) {
      throw new Error(WORK_STOP);
    } else if (existUserUsername === "") {
      throw new Error("Username can't be blank field");
    }
    // eslint-disable-next-line no-alert
    const existUserPassword: string | null = prompt(ENTER_PASSWORD);
    if (existUserPassword === null) {
      throw new Error(WORK_STOP);
    } else if (existUserPassword === "") {
      throw new Error("Password can't be blank field");
    }

    await login(existUserUsername!, existUserPassword!, usersList);
  } catch (error) {
    handleError(error);
  }

  return usersList;
}
