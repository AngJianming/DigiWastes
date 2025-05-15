import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  await mongoose.connect(process.env.MONGODB_URI);
};

mongoose.connect(process.env.MONGO_URI, {
  tlsAllowInvalidCertificates: true, // skip strict cert check
  tlsInsecure: true
});


export default connectDB;