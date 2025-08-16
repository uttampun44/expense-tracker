import User from "@/model/User";


const loginController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide all the required fields" });
        }
        try {
            const user = await User.findOne({ name, email });
            if (!user) {
                return res.status(401).json({ message: "Invalid Credentials" });
            }
            const token = await user.generateAuthToken();
            return res.status(200).json({ message: "Login Successful", token });
        } catch (error) {
            return res.status(500).json({ message: "Error while logging in" });
        }
    }
}