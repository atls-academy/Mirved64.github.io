"use strict";
let user = {
    username: "",
    password: "",
    isAuth: false,
};
const usersList = [];
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
        const newUserUsername = prompt("Enter your username, please");
        const newUserPassword = prompt("Enter password, please");
        if (newUserUsername.length <= 5 || newUserUsername === "") {
            throw new Error("Username must be at least 5 characters long");
        }
        else if (newUserPassword.length <= 6 || newUserUsername === "") {
            throw new Error("Password must be at least 6 characters long");
        }
        else if (user.isAuth) {
            throw new Error(`${user.username}, please logout before register`);
        }
        else {
            register(newUserUsername, newUserPassword);
        }
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
        const existUserUsername = prompt("Enter your username, please");
        if (existUserUsername === "") {
            throw new Error("Username can't be blank field");
        }
        const existUserPassword = prompt("Enter password, please");
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
