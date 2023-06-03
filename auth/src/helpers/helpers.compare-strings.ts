import bcrypt from 'bcryptjs'

export const compareStrings = (string: string, hashString: string): boolean => {
  const result: boolean = bcrypt.compareSync(string, hashString)
  return result
}
