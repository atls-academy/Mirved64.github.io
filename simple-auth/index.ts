interface IUser {
  username: string;
  password: string;
  isAuth?: boolean;
}

let user: IUser = {
  username: "",
  password: "",
  isAuth: false,
};

const usersList: IUser[] = [];

const WORK_STOP: string = "Work was stopped by the user";
const ENTER_USERNAME: string = "Enter your username, please";
const ENTER_PASSWORD: string = "Enter password, please";

function handleError(error: unknown): void {
  if (error instanceof Error) {
    alert(error.message);
  }
}

const register = (username: string, password: string): void => {
  const newReg: IUser = {
    username,
    password,
    isAuth: true,
  };
  user = newReg;
  usersList.push(newReg);
  alert(`Welcome, ${newReg.username}!`);
};

function registerUser(): void {
  try {
    if (user.isAuth) {
      throw new Error(`${user.username}, please logout before register`);
    }

    const newUserUsername: string | null = prompt(ENTER_USERNAME);
    if (newUserUsername === null) {
      throw new Error(WORK_STOP);
    } else if (newUserUsername!.length <= 5) {
      throw new Error("Username must be at least 5 characters long");
    }

    const checkSameUsers: boolean = usersList.some(
      (user) => user.username === newUserUsername
    );

    if (checkSameUsers) {
      throw new Error("A user with this name already exists");
    }

    const newUserPassword: string | null = prompt(ENTER_PASSWORD);
    if (newUserPassword === null) {
      throw new Error(WORK_STOP);
    } else if (newUserPassword!.length <= 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    register(newUserUsername!, newUserPassword!);
  } catch (error) {
    handleError(error);
  }
}

function logout(): void {
  try {
    if (!user.isAuth) {
      throw new Error("Please login, my friend");
    }
    user.isAuth = false;
    alert(`See you later, ${user.username}!`);
    user = {
      username: "",
      password: "",
      isAuth: false,
    };
  } catch (error) {
    handleError(error);
  }
}

function loginUser(): void {
  try {
    if (user.isAuth) {
      throw new Error(`${user.username}, please logout before login!`);
    }

    const existUserUsername: string | null = prompt(ENTER_USERNAME);
    if (existUserUsername === null) {
      throw new Error(WORK_STOP);
    } else if (existUserUsername === "") {
      throw new Error("Username can't be blank field");
    }

    const existUserPassword: string | null = prompt(ENTER_PASSWORD);
    if (existUserPassword === null) {
      throw new Error(WORK_STOP);
    } else if (existUserPassword === "") {
      throw new Error("Password can't be blank field");
    }

    login(existUserUsername!, existUserPassword!);
  } catch (error) {
    handleError(error);
  }
}

function login(username: string, password: string): void {
  try {
    const userIndex: number = usersList.findIndex(
      (user) => user.username === username && user.password === password
    );
    if (userIndex === -1) {
      throw new Error("Incorrect username or password, try again!");
    }

    const userActive: IUser = usersList[userIndex];

    userActive.isAuth = true;

    user = userActive;

    alert(`You are welcome, ${username}!`);
  } catch (error) {
    handleError(error);
  }
}

// TESTS------------------------------

registerUser();
logout();
// loginUser();
registerUser();
logout();
registerUser();
logout();
// loginUser();
// registerUser();
// logout();
// registerUser();
// logout();
// loginUser();
// logout();
// loginUser();
