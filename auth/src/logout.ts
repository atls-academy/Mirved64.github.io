import { User }                 from './auth.interfaces'
import { checkIndexOfAuthUser } from './check-utils'
import { handleError }          from './handle-error'

export const logout = (usersList: User[]): User[] => {
  try {
    const authUserIndex: number = checkIndexOfAuthUser(usersList)
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
