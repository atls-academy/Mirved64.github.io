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
  try {
    if (username.length <= 5) {
      throw new Error("Username must be at least 5 characters long");
    } else if (password.length <= 6) {
      throw new Error("Password must be at least 6 characters long");
    } else {
      const newUser: IUserInfo = {
        username,
        password,
      };

      userIsAuth = { isAuth: true, user: newUser };

      console.log(`Nice to meet you, ${username}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

function whoami(): void {
  console.log(`You are ${userIsAuth.user.username}`);
}

whoami();
logout();
register("Mikhail", "qwe");
register("Mixa", "qwerty");
register("Mikhail", "qwerty1");
whoami();
logout();
login("Mikhail", "qwerty");
whoami();
