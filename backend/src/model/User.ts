 import mongoose from "mongoose";

 type UserType = {
    name: string,
    email: string,
    password: string,
};

 const userSchema  = new mongoose.Schema<UserType>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export default mongoose.model("users", userSchema);