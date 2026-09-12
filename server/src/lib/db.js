import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const mongoUri = process.env.NODE_ENV === 'development' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PRO

const connectDB = async () => {
    try {
        const connect =await mongoose.connect(mongoUri, { dbName: process.env.DB_NAME })
        console.log(
            `MongoDB connected: ${connect.connection.host}/${connect.connection.name}`,
         );
        
    } catch (error) {
        console.log('cannot connect to DB',error);
        process.exit(1)
        
  }
};

export default connectDB
