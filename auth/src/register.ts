import bcrypt   from 'bcryptjs'

import { User } from './auth.interfaces'

export const register = (username: string, password: string, usersList: User[]): User[] => {
  const authUser: boolean = usersList.some((user) => user.isAuth === true)

  if (authUser) {
    throw new Error(`AuthError! ${username},  please logout before register!`)
  }
  if (username.length <= 5) {
    throw new Error('ValidationError! Username must be at least 5 characters long')
  }

  const checkSameUsers: boolean = usersList.some((user) => user.username === username)

  if (checkSameUsers) {
    throw new Error('ValidationError! A user with this name already exists')
  }
  if (password.length <= 6) {
    throw new Error('ValidationError! Password must be at least 6 characters long')
  }
  const newUserPassword: string = bcrypt.hashSync(password, 10)
  const newUser: User = {
    username,
    password: newUserPassword,
    isAuth: true,
  }

  usersList.push(newUser)

  return usersList
}
