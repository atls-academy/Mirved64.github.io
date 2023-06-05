import { User }                 from './auth.interfaces'
import { handleError }          from './handle-error'

export const logout = (usersList: User[]): User[] => {
  try {
    const authUserIndex: number = usersList.findIndex((user) => user.isAuth === true)
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
