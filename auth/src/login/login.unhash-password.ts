import bcrypt from "bcryptjs";

export const unhashPassword = (
  password: string,
  hashPassword: string
): boolean => {
  const unhashPass: boolean = bcrypt.compareSync(password, hashPassword);
  return unhashPass;
}
