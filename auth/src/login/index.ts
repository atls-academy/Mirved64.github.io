import { User }           from '../auth.interfaces'
import { handleError }    from '../support-modules'
import { checkAuthUser }  from '../support-modules'
import { compareStrings } from './login.compare-strings'

export const login = (username: string, password: string, usersList: User[]): User[] => {
  try {
    if (checkAuthUser(usersList)) {
      throw new Error(`${username}, please logout before login!`)
    }

    const userIndex: number = usersList.findIndex(
      (user) => user.username === username && compareStrings(password, user.password)
    )
    if (userIndex === -1) {
      throw new Error('Incorrect username or password, try again!')
    }

    const userActive: User = usersList[userIndex]

    userActive.isAuth = true
  } catch (error) {
    handleError(error)
  }

  return usersList
}
