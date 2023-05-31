import { User } from "../simple-auth.interfaces";

export const checkAuthUserIndex = (
  usersList: User[]
): number => {
  const authUserIndex: number = usersList.findIndex(
    (user) => user.isAuth === true
  );

  return authUserIndex;
}
