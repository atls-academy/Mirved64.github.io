import { User }           from "../simple-auth.interfaces";
import { comparePassword } from "./login.compare-password";
import { handleError }    from "../support-modules";
import { checkAuthUser }  from "../support-modules";;

export const login = (
  username: string,
  password: string,
  usersList: User[]
): User[] => {
  try {
    if (checkAuthUser(usersList)) {
      throw new Error(`${username}, please logout before login!`);
    }

    const userIndex: number = usersList.findIndex(
      (user) =>
        user.username === username && comparePassword(password, user.password)
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
