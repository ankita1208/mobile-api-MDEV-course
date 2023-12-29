import { connect } from 'mongoose';
const MONGOURI = 'mongodb+srv://user1234:user1234@cluster0.wfbefe7.mongodb.net/?retryWrites=true&w=majority';

const InitiateMongoServer = async () => {
    try {
        await connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB using Mongoose!");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
        throw e;
    }
};

export default InitiateMongoServer;

