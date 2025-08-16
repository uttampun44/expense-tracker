import User from "@/model/User";
import bcrypt from "bcrypt";

const registerController = {
    register: async (req: any, res: any) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide all the required fields" });
        }
        try {
            const user = await User.create({ name, email, password: bcrypt.hashSync(password, 10) });
            return res.status(201).json({ message: "User created successfully", user });
        } catch (error) {
            return res.status(500).json({ message: "Error while creating user" });
        }
    },
    
}

export default registerController;