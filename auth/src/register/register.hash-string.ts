import bcrypt from 'bcryptjs'

export const hashString = (string: string): string => {
  const salt: string = bcrypt.genSaltSync(10)
  const hash: string = bcrypt.hashSync(string, salt)
  return hash
}
