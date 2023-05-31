import { User } from "../simple-auth.interfaces";

export const checkAuthUser = async (
  usersList: User[]
): Promise<boolean> => {
  const userIsAuth: boolean = await usersList.some(
    (user) => user.isAuth === true
  );
  return userIsAuth;
}
