import { User }               from './auth.interfaces'
import { handleError }        from './helpers'
import { checkAuthUserIndex } from './helpers'

export const logout = (usersList: User[]): User[] => {
  try {
    const authUserIndex: number = checkAuthUserIndex(usersList)
    if (authUserIndex === -1) {
      throw new Error(`No authorized users`)
    }
    const authUser: User = usersList[authUserIndex]
    authUser.isAuth = false
  } catch (error) {
    handleError(error)
  }
  return usersList
}
