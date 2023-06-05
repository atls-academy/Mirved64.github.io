import { User }                 from './auth.interfaces'
import { handleError }          from './handle-error'

export const whoami = (usersList: User[]): void => {
  try {
    const userIndex: number = usersList.findIndex((user) => user.isAuth === true)
    if (userIndex === -1) {
      throw new Error(`No authorized users`)
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${usersList[userIndex].username}`)
  } catch (error) {
    handleError(error)
  }
}
