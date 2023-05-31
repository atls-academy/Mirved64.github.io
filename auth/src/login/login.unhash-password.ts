import bcrypt from "bcryptjs";

export const unhashPassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  const unhashPass: boolean = await bcrypt.compareSync(password, hashPassword);
  return unhashPass;
}
