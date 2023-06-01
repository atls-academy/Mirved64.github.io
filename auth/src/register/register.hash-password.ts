import bcrypt from 'bcryptjs'

export const hashPassword = (password: string): string => {
  const salt: string = bcrypt.genSaltSync(10)
  const hash: string = bcrypt.hashSync(password, salt)
  return hash
}
