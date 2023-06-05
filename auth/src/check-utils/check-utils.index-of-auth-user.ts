import { User } from '../auth.interfaces'

export const checkIndexOfAuthUser = (usersList: User[]): number => {
  const indexOfAuthUser: number = usersList.findIndex((user) => user.isAuth === true)

  return indexOfAuthUser
}
