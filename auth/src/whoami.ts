import { User }                 from './auth.interfaces'
import { checkIndexOfAuthUser } from './check-utils'
import { handleError }          from './handle-error'

export const whoami = (usersList: User[]): void => {
  try {
    const userIndex: number = checkIndexOfAuthUser(usersList)
    if (userIndex === -1) {
      throw new Error(`No authorized users`)
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${usersList[userIndex].username}`)
  } catch (error) {
    handleError(error)
  }
}
