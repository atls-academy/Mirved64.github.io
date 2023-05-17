import { IUserInfo, UserIsAurh } from "./types";

let userIsAuth: UserIsAurh = {
  isAuth: false,
  user: {},
};

function login(username: string, password: string): void {
  const activeUser: IUserInfo = {
    username,
    password,
  };

  userIsAuth = { isAuth: true, user: activeUser };

  console.log(`You are welcome, ${username}!`);
}

function logout(): void {
  console.log(`See you later, ${userIsAuth.user.username}!`);

  userIsAuth = {
    isAuth: false,
    user: {},
  };
}

function register(username: string, password: string): void {
  const newUser: IUserInfo = {
    username,
    password,
  };

  userIsAuth = { isAuth: true, user: newUser };

  console.log(`Nice to meet you, ${username}`)
}

function whoami(): void {
  console.log(`You are ${userIsAuth.user.username}`)
}