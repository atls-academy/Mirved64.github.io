import { IUserInfo, UserIsAurh } from "./types";

let userIsAuth: UserIsAurh = {
  isAuth: false,
  user: {},
};

const credentials: Array<IUserInfo> = [];

function login(username: string, password: string): void {
  try {
    const existUser = credentials.find(
      (user) => user.username === username && user.password === password
    );

    if (!existUser) {
      throw new Error("Incorrect username or password, try again");
    }

    const activeUser: IUserInfo = {
      username,
      password,
    };

    userIsAuth = { isAuth: true, user: activeUser };

    console.log(`You are welcome, ${username}!`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
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
    }
    const newUser: IUserInfo = {
      username,
      password,
    };

    userIsAuth = { isAuth: true, user: newUser };

    console.log(`Nice to meet you, ${username}`);

    credentials.push(newUser);
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
register("Mixa", "qwerty1");
register("Mikhail", "qwerty1");
whoami();
logout();
login("Mikhail", "qwerty");
whoami();
register("Mirved64", "1234567");
console.log(credentials);
