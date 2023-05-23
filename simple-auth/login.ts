import { User } from "./types";
import { handleError } from "./handle-error";

export default function login(
  username: string,
  password: string,
  usersList: User[]
): User[] {
  try {
    const checkAuthUser: boolean = usersList.some(
      (user) => user.isAuth === true
    );
    if (checkAuthUser) {
      throw new Error(`${username}, please logout before login!`);
    }

    const userIndex: number = usersList.findIndex(
      (user) => user.username === username && user.password === password
    );
    if (userIndex === -1) {
      throw new Error("Incorrect username or password, try again!");
    }

    const userActive: User = usersList[userIndex];

    userActive.isAuth = true;

    // eslint-disable-next-line no-alert
    alert(`You are welcome, ${username}!`);
  } catch (error) {
    handleError(error);
  }

  return usersList;
}
