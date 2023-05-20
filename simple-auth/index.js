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
        if (newUserUsername.length <= 5 || newUserUsername === null) {
            throw new Error("Username must be at least 5 characters long");
        }
        else if (newUserPassword.length <= 6 || newUserUsername === null) {
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
