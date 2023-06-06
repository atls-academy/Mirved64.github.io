import bcrypt   from 'bcryptjs'

import { User } from './auth.interfaces'

export const login = (username: string, password: string, usersList: User[]): User[] => {
  const authUser: boolean = usersList.some((user) => user.isAuth === true)

  if (authUser) {
    throw new Error(`AuthError! ${username}, please logout before login!`)
  }
  const foundUserIndex: number = usersList.findIndex(
    (user) => user.username === username && bcrypt.compareSync(password, user.password)
  )
  if (foundUserIndex === -1) {
    throw new Error('ValidationError! Incorrect username or password, try again!')
  }
  const foundUser: User = usersList[foundUserIndex]

  foundUser.isAuth = true

  return usersList
}
