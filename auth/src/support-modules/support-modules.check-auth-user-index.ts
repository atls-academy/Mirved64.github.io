import { User } from "../simple-auth.interfaces";

export async function checkAuthUserIndex(
  usersList: User[]
): Promise<number> {
  const authUserIndex: number = await usersList.findIndex(
    (user) => user.isAuth === true
  );

  return authUserIndex;
}
