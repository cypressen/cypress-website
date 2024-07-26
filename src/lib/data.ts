import { User } from "./models";
import { connectToDB } from "./utils";


export const getUsers = async () => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users");
    }
}

export const getUser = async (id: string) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user");
    }
}


