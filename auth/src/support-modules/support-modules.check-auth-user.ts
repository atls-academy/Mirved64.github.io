import { User } from "../simple-auth.interfaces";

export const checkAuthUser = (
  usersList: User[]
): boolean => {
  const userIsAuth: boolean = usersList.some(
    (user) => user.isAuth === true
  );
  return userIsAuth;
}
