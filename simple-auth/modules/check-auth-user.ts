import { User } from "../types";

export default async function checkAuthUser(
  usersList: User[]
): Promise<boolean> {
  const userIsAuth: boolean = await usersList.some(
    (user) => user.isAuth === true
  );
  return userIsAuth;
}
