import User from "../models/UserModel.js";

export async function createUser(email, hashedPassword) {
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser) {
        await User.create({
            email,
            password: hashedPassword,
            isAdmin: false,
        });
    } else {
    }
}
