import { IUserInfo, UserIsAurh } from "./types";

let userIsAuth: UserIsAurh = {
  isAuth: false,
  user: {},
};

const credentials: Array<IUserInfo> = [];

function login(username: string, password: string): void {
  try {
    if (userIsAuth.isAuth) {
      throw new Error(`${username}, please logout before login`);
    }
    
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
  try {
    if (!userIsAuth.isAuth) {
      throw new Error("Please login, my friend");
    }

    console.log(`See you later, ${userIsAuth.user.username}!`);

    userIsAuth = {
      isAuth: false,
      user: {},
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

function register(username: string, password: string): void {
  try {
    if (username.length <= 5) {
      throw new Error("Username must be at least 5 characters long");
    } else if (password.length <= 6) {
      throw new Error("Password must be at least 6 characters long");
    } else if (userIsAuth.isAuth) {
      throw new Error(`${username}, please logout before register`);
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
  try {
    if (!userIsAuth.isAuth) {
      throw new Error("Please login, my friend");
    }
    
    console.log(`You are ${userIsAuth.user.username}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

// Tests ------------------------------
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
