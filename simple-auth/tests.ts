import { simpleAuth } from "./app";

const { usersList, register, login, whoami, logout } = simpleAuth;

console.log(usersList);
register("Mikhail", "qwertyu", usersList)
  .then((usersList) => whoami(usersList))
  .then(() => logout(usersList))
  .then((usersList) => login("Mikhail", "qwertyu", usersList))
  .then((usersList) => whoami(usersList))
  .then(() => logout(usersList))
  .then((usersList) => login("Mikhail", "qwertyu", usersList))
  .then((usersList) => login("Mikhail", "qwertyu", usersList))
  .then((usersList) => logout(usersList))
  .then((usersList) => login("Mikhai", "qwertyu", usersList))
  // eslint-disable-next-line no-console
  .then((usersList) => console.log(usersList))
  .then(() => logout(usersList))
  .then((usersList) => whoami(usersList))
  .then(()=>register("Mixan11", "qwertyu", usersList))
  .then((usersList) => logout(usersList))
  .then((usersList)=>register("Mixan111", "qwertyu", usersList))
  .then((usersList) => logout(usersList))
  .then((usersList)=>register("Mixan1111", "qwertyu", usersList))
  .then((usersList) => logout(usersList))
  .then((usersList)=>register("Mixan11111", "qwertyu", usersList))
  .then((usersList) => logout(usersList))
  // eslint-disable-next-line no-console
  .then((usersList) => console.log(usersList))
  .then(() => login("Mixan11", "qwertyu", usersList))
  // eslint-disable-next-line no-console
  .then((usersList) => console.log(usersList))
  .then(() => whoami(usersList))
  .then(() => logout(usersList))
