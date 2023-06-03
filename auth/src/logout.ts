import { User }               from './auth.interfaces'
import { handleError }        from './helpers'
import { checkAuthUser }      from './helpers'
import { checkAuthUserIndex } from './helpers'

export const logout = (usersList: User[]): User[] => {
  try {
    if (!checkAuthUser(usersList)) {
      throw new Error(`No authorized users`)
    }
    const authUserIndex: number = checkAuthUserIndex(usersList)
    const logoutUser: User = usersList[authUserIndex]
    logoutUser.isAuth = false
  } catch (error) {
    handleError(error)
  }
  return usersList
}
