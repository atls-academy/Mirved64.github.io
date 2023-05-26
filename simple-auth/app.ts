import login from "./modules/login/login";
import register from "./modules/register/register";
import whoami from "./modules/whoami";
import logout from "./modules/logout";
import { User } from "./types";

const usersList: User[] = [];

export const simpleAuth = {
  usersList,
  register,
  login,
  whoami,
  logout
}
