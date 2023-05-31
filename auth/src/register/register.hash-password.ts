import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const salt: string = bcrypt.genSaltSync(10);
  const hash: string = await bcrypt.hashSync(password, salt);
  return hash;
}
