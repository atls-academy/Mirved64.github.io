import bcrypt from 'bcryptjs'

export const comparePassword = (password: string, hashPassword: string): boolean => {
  const unhashPass: boolean = bcrypt.compareSync(password, hashPassword)
  return unhashPass
}
