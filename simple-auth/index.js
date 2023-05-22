"use strict";
let user = {
    username: "",
    password: "",
    isAuth: false,
};
const usersList = [];
const WORK_STOP = "Work was stopped by the user";
const ENTER_USERNAME = "Enter your username, please";
const ENTER_PASSWORD = "Enter password, please";
function handleError(error) {
    if (error instanceof Error) {
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
    alert(`Welcome, ${newReg.username}!`);
};
function registerUser() {
    try {
        const newUserUsername = prompt(ENTER_USERNAME);
        if (newUserUsername === null) {
            throw new Error(WORK_STOP);
        }
        else if (newUserUsername.length <= 5) {
            throw new Error("Username must be at least 5 characters long");
        }
        const newUserPassword = prompt(ENTER_PASSWORD);
        if (newUserPassword === null) {
            throw new Error(WORK_STOP);
        }
        else if (newUserPassword.length <= 6) {
            throw new Error("Password must be at least 6 characters long");
        }
        if (user.isAuth) {
            throw new Error(`${user.username}, please logout before register`);
        }
        register(newUserUsername, newUserPassword);
    }
    catch (error) {
        handleError(error);
    }
}
function logout() {
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
    }
    catch (error) {
        handleError(error);
    }
}
function loginUser() {
    try {
        if (user.isAuth) {
            throw new Error(`${user.username}, please logout before login!`);
        }
        const existUserUsername = prompt(ENTER_USERNAME);
        if (existUserUsername === "") {
            throw new Error("Username can't be blank field");
        }
        const existUserPassword = prompt(ENTER_PASSWORD);
        if (existUserPassword === "") {
            throw new Error("Password can't be blank field");
        }
        login(existUserUsername, existUserPassword);
    }
    catch (error) {
        handleError(error);
    }
}
function login(username, password) {
    try {
        const userIndex = usersList.findIndex((user) => user.username === username && user.password === password);
        if (userIndex === -1) {
            throw new Error("Incorrect username or password, try again!");
        }
        const userActive = usersList[userIndex];
        userActive.isAuth = true;
        user = userActive;
        alert(`You are welcome, ${username}!`);
    }
    catch (error) {
        handleError(error);
    }
}
// TESTS------------------------------
registerUser();
registerUser();
logout();
registerUser();
logout();
registerUser();
logout();
loginUser();
logout();
loginUser();
