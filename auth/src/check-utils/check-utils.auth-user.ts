import { User } from '../auth.interfaces'

export const checkAuthUser = (usersList: User[]): boolean => {
  const isAuthUser: boolean = usersList.some((user) => user.isAuth === true)
  return isAuthUser
}
