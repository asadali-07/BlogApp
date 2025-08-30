import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected!");
      return;
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected!");
  } catch (err) {
    console.log(err);
    console.log("Database not connected!");
    process.exit(1);
  }
};