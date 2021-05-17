const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        })
        console.log("db succesful")
    }
    catch(err) {
        process.exit(1);
    }
}

module.exports = connectDB;