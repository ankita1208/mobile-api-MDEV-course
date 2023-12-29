import mongoose from 'mongoose';

/**
 * @function
 * @description Establishes a connection to the MongoDB database using Mongoose.
 * @returns A Promise that resolves when the database connection is successfully established.
 * @throws {Error} If there is an error connecting to the database.
 */
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database with the provided URL and options.
    await mongoose.connect('mongodb+srv://user1234:user1234@cluster0.wfbefe7.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Log a success message to indicate that the connection is established.
    console.log('MongoDB Connected');
  } catch (error) {
    // If there's an error connecting to the database, log the error message.
    console.error('MongoDB Connection Error:', error);
    
    // Throw the error to notify the calling function about the connection failure.
    throw error;
  }
};

// Export the connectDB function to make it available for other parts of the application.
export default connectDB;