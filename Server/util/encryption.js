import bcrypt from "bcrypt";

const saltRounds = 10;

export async function encryptPassword(password) {
    const b = await bcrypt.hash(password, saltRounds);
    return b;
}