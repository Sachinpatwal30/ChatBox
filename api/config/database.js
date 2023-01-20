const mongoose= require('mongoose');

const connectDatabase = ()=>{

    mongoose.set('strictQuery', true);
    
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Successfully Connected to MongoDB")})
    .catch(()=>{console.log("Mongodb Connection Failed")});
}

module.exports= connectDatabase;