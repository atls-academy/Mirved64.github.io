import bcrypt            from 'bcryptjs'

import { User }          from './auth.interfaces'
import { handleError }   from './helpers'
import { checkAuthUser } from './helpers'

export const register = (username: string, password: string, usersList: User[]): User[] => {
  try {
    if (checkAuthUser(usersList)) {
      throw new Error(`${username},  please logout before register!`)
    }

    if (username.length <= 5) {
      throw new Error('Username must be at least 5 characters long')
    }

    const checkSameUsers: boolean = usersList.some((user) => user.username === username)
    if (checkSameUsers) {
      throw new Error('A user with this name already exists')
    }

    if (password.length <= 6) {
      throw new Error('Password must be at least 6 characters long')
    }

    const newUserPassword: string = bcrypt.hashSync(password, 10)
    const newUser: User = {
      username,
      password: newUserPassword,
      isAuth: true,
    }

    usersList.push(newUser)
  } catch (error) {
    handleError(error)
  }
  return usersList
}
