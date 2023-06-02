import { User }               from '../auth.interfaces'
import { handleError }        from '../helpers'
import { checkAuthUser }      from '../helpers'
import { checkAuthUserIndex } from '../helpers'

export const logout = (usersList: User[]): User[] => {
  let newUsersList: User[] = []
  try {
    if (!checkAuthUser(usersList)) {
      throw new Error(`No authorized users`)
    }
    const authUserIndex: number = checkAuthUserIndex(usersList)
    newUsersList = [
      ...usersList.filter((el) => el.isAuth === false),
      {
        username: usersList[authUserIndex].username,
        password: usersList[authUserIndex].password,
        isAuth: false,
      },
    ]
  } catch (error) {
    handleError(error)
  }
  return newUsersList
}
