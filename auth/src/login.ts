import bcrypt            from 'bcryptjs'

import { User }          from './auth.interfaces'
import { checkAuthUser } from './check-utils'
import { handleError }   from './handle-error'

export const login = (username: string, password: string, usersList: User[]): User[] => {
  try {
    if (checkAuthUser(usersList)) {
      throw new Error(`${username}, please logout before login!`)
    }

    const foundUserIndex: number = usersList.findIndex(
      (user) => user.username === username && bcrypt.compareSync(password, user.password)
    )
    if (foundUserIndex === -1) {
      throw new Error('Incorrect username or password, try again!')
    }

    const foundUser: User = usersList[foundUserIndex]

    foundUser.isAuth = true
  } catch (error) {
    handleError(error)
  }

  return usersList
}
