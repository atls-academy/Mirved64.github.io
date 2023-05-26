import { User } from "../../types";
import handleError from "../handle-error";
import checkAuthUser from "../check-auth-user";
import unhashPassword from "./unhash-password";

export default async function login(
  username: string,
  password: string,
  usersList: User[]
): Promise<User[]> {
  try {
    if (await checkAuthUser(usersList)) {
      throw new Error(`${username}, please logout before login!`);
    }

    const userIndex: number = await usersList.findIndex(
      (user) =>
        user.username === username && unhashPassword(password, user.password)
    );
    if (userIndex === -1) {
      throw new Error("Incorrect username or password, try again!");
    }

    const userActive: User = usersList[userIndex];

    userActive.isAuth = true;

    // eslint-disable-next-line no-console
    console.log(`You are welcome, ${username}!`);
  } catch (error) {
    handleError(error);
  }

  return usersList;
}
