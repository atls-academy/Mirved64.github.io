import { User }          from '../simple-auth.interfaces'
import { handleError }   from '../support-modules'
import { checkAuthUser } from '../support-modules'
import { hashPassword }  from './register.hash-password'

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

    const newRegPass: string = hashPassword(password)

    const newReg: User = {
      username,
      password: newRegPass,
      isAuth: true,
    }

    usersList.push(newReg)
    // eslint-disable-next-line no-console
    console.log(`Welcome, ${newReg.username}!`)
  } catch (error) {
    handleError(error)
  }
  return usersList
}
