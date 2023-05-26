import bcrypt from "bcryptjs";

export default async function unhashPassword(
  password: string,
  hashPassword: string
): Promise<boolean> {
  const unhashPass: boolean = await bcrypt.compareSync(password, hashPassword);
  return unhashPass;
}
