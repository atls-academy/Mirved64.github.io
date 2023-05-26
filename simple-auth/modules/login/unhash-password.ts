import bcrypt from 'bcryptjs';

export default function unhashPassword(password:string, hashPassword: string): boolean {
  return bcrypt.compareSync(password, hashPassword);
}
