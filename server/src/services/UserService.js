import User from "../models/UserModel.js";


export async function createUser(email, hashedPassword) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error("Email already registered");
    }

    const newUser = await User.create({
        email,
        password: hashedPassword,
        isAdmin: false,
    });

    return newUser; 
}

