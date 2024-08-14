import mongoose from "mongoose";
import { DB_NAME } from "../constents.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Successfully connected to the database :: Database hosted on :: ", connectionInstance.connection.host)
    } catch (error) {
        console.error("An error occours while connecting to the database ::", error);
        process.exit(1);
    }
}

export {connectDB}