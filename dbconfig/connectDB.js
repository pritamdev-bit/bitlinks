import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        conn.connection.on("connected", () => {
            console.log("Connected to MongoDB");
        })
        conn.connection.on("error", (err) => {
            console.error("Error establishing connection to MongoDB", err);
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB

