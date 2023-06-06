import { User } from './auth.interfaces'

export const logout = (usersList: User[]): User[] => {
  const authUserIndex: number = usersList.findIndex((user) => user.isAuth === true)
  if (authUserIndex === -1) {
    throw new Error(`AuthError! No authorized users`)
  } else {
    const authUser: User = usersList[authUserIndex]
    authUser.isAuth = false
  }

  return usersList
}
