import bcrypt from "bcryptjs";

export default async function hashPassword(password: string): Promise<string> {
  const salt: string = bcrypt.genSaltSync(10);
  const hash: string = await bcrypt.hashSync(password, salt);
  return hash;
}
