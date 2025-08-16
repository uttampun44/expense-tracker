import mongoose from "mongoose";
import { dbConnectionType } from "@/types/dConnectionType";
import dotenv from "dotenv";

// import dotenv from "dotenv" first;
dotenv.config();

const mongooseUri = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongooseUri as dbConnectionType["uri"]);
    } catch (error) {
        console.log(error);
    }finally {
        mongoose.connection.close();
    }
};

export default connectDB;