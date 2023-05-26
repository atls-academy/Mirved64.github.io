import { simpleAuth } from "./app";

const { usersList, register, login, whoami, logout } = simpleAuth;
// eslint-disable-next-line no-console
console.log(usersList);
register("Mikhail", "qwertyu", usersList)
  .then((usersList1) => whoami(usersList1))
  .then(() => logout(usersList))
  .then((usersList2) => login("Mikhail", "qwertyu", usersList2))
  .then((usersList3) => whoami(usersList3))
  .then(() => logout(usersList))
  .then((usersList4) => login("Mikhail", "qwertyu", usersList4))
  .then((usersList5) => login("Mikhail", "qwertyu", usersList5))
  .then((usersList6) => logout(usersList6))
  .then((usersList7) => login("Mikhai", "qwertyu", usersList7))
  // eslint-disable-next-line no-console
  .then((usersList8) => console.log(usersList8))
  .then(() => logout(usersList))
  .then((usersList9) => whoami(usersList9))
  .then(()=>register("Mixan11", "qwertyu", usersList))
  .then((usersList10) => logout(usersList10))
  .then((usersList11)=>register("Mixan111", "qwertyu", usersList11))
  .then((usersList12) => logout(usersList12))
  .then((usersList13)=>register("Mixan1111", "qwertyu", usersList13))
  .then((usersList14) => logout(usersList14))
  .then((usersList15)=>register("Mixan11111", "qwertyu", usersList15))
  .then((usersList16) => logout(usersList16))
  // eslint-disable-next-line no-console
  .then((usersList17) => console.log(usersList17))
  .then(() => login("Mixan11", "qwertyu", usersList))
  // eslint-disable-next-line no-console
  .then((usersList18) => console.log(usersList18))
  .then(() => whoami(usersList))
  .then(() => logout(usersList))
