import { User } from './auth.interfaces'

export const whoami = (usersList: User[]): void => {
  const userIndex: number = usersList.findIndex((user) => user.isAuth === true)
  if (userIndex === -1) {
    throw new Error(`AuthError! No authorized users`)
  }
  // eslint-disable-next-line no-console
  console.log(`You are ${usersList[userIndex].username}`)
}
