let user = {
    username: "",
    password: "",
    isAuth: false,
};
const usersList = [];
const WORK_STOP = "Work was stopped by the user";
const ENTER_USERNAME = "Enter your username, please";
const ENTER_PASSWORD = "Enter password, please";
const LOGIN_BEFORE = "Please login, my friend";
function handleError(error) {
    if (error instanceof Error) {
        // eslint-disable-next-line no-alert
        alert(error.message);
    }
}
const register = (username, password) => {
    const newReg = {
        username,
        password,
        isAuth: true,
    };
    user = newReg;
    usersList.push(newReg);
    // eslint-disable-next-line no-alert
    alert(`Welcome, ${newReg.username}!`);
};
/*  eslint-disable @typescript-eslint/no-unused-vars  */
function registerUser() {
    try {
        if (user.isAuth) {
            throw new Error(`${user.username}, please logout before register`);
        }
        // eslint-disable-next-line no-alert
        const newUserUsername = prompt(ENTER_USERNAME);
        if (newUserUsername === null) {
            throw new Error(WORK_STOP);
        }
        else if (newUserUsername.length <= 5) {
            throw new Error("Username must be at least 5 characters long");
        }
        const checkSameUsers = usersList.some((u) => u.username === newUserUsername);
        if (checkSameUsers) {
            throw new Error("A user with this name already exists");
        }
        // eslint-disable-next-line no-alert
        const newUserPassword = prompt(ENTER_PASSWORD);
        if (newUserPassword === null) {
            throw new Error(WORK_STOP);
        }
        else if (newUserPassword.length <= 6) {
            throw new Error("Password must be at least 6 characters long");
        }
        register(newUserUsername, newUserPassword);
    }
    catch (error) {
        handleError(error);
    }
}
/*  eslint-enable @typescript-eslint/no-unused-vars */
/*  eslint-disable @typescript-eslint/no-unused-vars  */
function logout() {
    try {
        if (!user.isAuth) {
            throw new Error(LOGIN_BEFORE);
        }
        user.isAuth = false;
        // eslint-disable-next-line no-alert
        alert(`See you later, ${user.username}!`);
        user = {
            username: "",
            password: "",
            isAuth: false,
        };
    }
    catch (error) {
        handleError(error);
    }
}
/*  eslint-enable @typescript-eslint/no-unused-vars */
function login(username, password) {
    try {
        const userIndex = usersList.findIndex((u) => u.username === username && u.password === password);
        if (userIndex === -1) {
            throw new Error("Incorrect username or password, try again!");
        }
        const userActive = usersList[userIndex];
        userActive.isAuth = true;
        user = userActive;
        // eslint-disable-next-line no-alert
        alert(`You are welcome, ${username}!`);
    }
    catch (error) {
        handleError(error);
    }
}
/*  eslint-disable @typescript-eslint/no-unused-vars  */
function loginUser() {
    try {
        if (user.isAuth) {
            throw new Error(`${user.username}, please logout before login!`);
        }
        // eslint-disable-next-line no-alert
        const existUserUsername = prompt(ENTER_USERNAME);
        if (existUserUsername === null) {
            throw new Error(WORK_STOP);
        }
        else if (existUserUsername === "") {
            throw new Error("Username can't be blank field");
        }
        // eslint-disable-next-line no-alert
        const existUserPassword = prompt(ENTER_PASSWORD);
        if (existUserPassword === null) {
            throw new Error(WORK_STOP);
        }
        else if (existUserPassword === "") {
            throw new Error("Password can't be blank field");
        }
        login(existUserUsername, existUserPassword);
    }
    catch (error) {
        handleError(error);
    }
}
/*  eslint-enable @typescript-eslint/no-unused-vars */
/*  eslint-disable @typescript-eslint/no-unused-vars  */
function whoami() {
    try {
        if (!user.isAuth) {
            throw new Error(LOGIN_BEFORE);
        }
        // eslint-disable-next-line no-console
        console.log(`You are ${user.username}`);
        // eslint-disable-next-line no-alert
        alert(`You are ${user.username}`);
    }
    catch (error) {
        handleError(error);
    }
}
/*  eslint-enable @typescript-eslint/no-unused-vars */
