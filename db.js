
const mongoose = require('mongoose');

const connectDatabase = async () => {

        await mongoose.connect("mongodb+srv://siyakusumakar_db_user:admin@cluster0.2mi6xan.mongodb.net/?appName=Cluster0");
        console.log("Connected to MongoDB");
  
}

module.exports = connectDatabase;
