import { User } from "../../types";
import handleError from "../handle-error";
import checkAuthUser from "../check-auth-user";
import hashPassword from "./hash-password";

export default async function register(
  username: string,
  password: string,
  usersList: User[]
): Promise<User[]> {
  try {
    if (await checkAuthUser(usersList)) {
      throw new Error(`${username},  please logout before register!`);
    }

    if (username.length <= 5) {
      throw new Error("Username must be at least 5 characters long");
    }

    const checkSameUsers: boolean = await usersList.some(
      (user) => user.username === username
    );
    if (checkSameUsers) {
      throw new Error("A user with this name already exists");
    }

    if (password.length <= 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    const newRegPass: string = await hashPassword(password);

    const newReg: User = {
      username,
      password: newRegPass,
      isAuth: true,
    };

    usersList.push(newReg);
    // eslint-disable-next-line no-console
    console.log(`Welcome, ${newReg.username}!`);
  } catch (error) {
    handleError(error);
  }
  return usersList;
}
