import { User } from "../../types";

export default async function checkAuthUserIndex(
  usersList: User[]
): Promise<number> {
  const authUserIndex: number = await usersList.findIndex(
    (user) => user.isAuth === true
  );

  return authUserIndex;
}
