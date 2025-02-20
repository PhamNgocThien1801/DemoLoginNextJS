import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("connected Faild to mongoDB: ", error);
    }
};