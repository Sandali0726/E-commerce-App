import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    });

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};

export default connectDB;