import { User } from "../../types";
import checkAuthUser from "../check-auth-user";
import { WORK_STOP, ENTER_USERNAME, ENTER_PASSWORD } from "../../constants";
import register from "./register";
import handleError from "../handle-error";

export default function regNewUser(usersList: User[]): User[] {
  try {
    if (checkAuthUser(usersList)) {
      throw new Error(`Please logout before register!`);
    }

    const newUserUsername: string | null = prompt(ENTER_USERNAME);
    if (newUserUsername === null) {
      throw new Error(WORK_STOP);
    }

    const checkSameUsers: boolean = usersList.some(
      (user) => user.username === newUserUsername
    );

    if (checkSameUsers) {
      throw new Error("A user with this name already exists");
    }

    const newUserPassword: string | null = prompt(ENTER_PASSWORD);
    if (newUserPassword === null) {
      throw new Error(WORK_STOP);
    }

    register(newUserUsername!, newUserPassword!, usersList);
  } catch (error) {
    handleError(error);
  }

  return usersList;
}
