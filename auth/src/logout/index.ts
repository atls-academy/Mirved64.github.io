import { User }               from '../simple-auth.interfaces'
import { handleError }        from '../support-modules'
import { checkAuthUser }      from '../support-modules'
import { checkAuthUserIndex } from '../support-modules'

export const logout = (usersList: User[]): User[] => {
  try {
    if (!checkAuthUser(usersList)) {
      throw new Error(`No authorized users`)
    }
    const authUserIndex: number = checkAuthUserIndex(usersList)
    const newUsersList: User[] = [
      ...usersList.filter((el) => el.isAuth === false),
      {
        username: usersList[authUserIndex].username,
        password: usersList[authUserIndex].password,
        isAuth: false,
      },
    ]

    // eslint-disable-next-line no-console
    console.log(`See you later, ${usersList[authUserIndex].username}!`)
    return newUsersList
  } catch (error) {
    handleError(error)
    return usersList
  }
}
