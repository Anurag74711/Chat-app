import mongoose from "mongoose"

export const connectDB= async()=>{
    try {
       const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error("Error in connecting to MongoDB",error)
        process.exit(1);
        
    }
}