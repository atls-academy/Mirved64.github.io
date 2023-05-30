import { User } from "../simple-auth.interfaces";

export default async function checkAuthUser(
  usersList: User[]
): Promise<boolean> {
  const userIsAuth: boolean = await usersList.some(
    (user) => user.isAuth === true
  );
  return userIsAuth;
}
