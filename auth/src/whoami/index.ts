import { User }               from '../simple-auth.interfaces'
import { handleError }        from '../support-modules'
import { checkAuthUserIndex } from '../support-modules'

export async function whoami(usersList: User[]): Promise<void> {
  try {
    const userIndex: number = await checkAuthUserIndex(usersList)
    if (userIndex === -1) {
      throw new Error(`No authorized users`)
    }
    // eslint-disable-next-line no-console
    console.log(`You are ${usersList[userIndex].username}`)
  } catch (error) {
    handleError(error)
  }
}
