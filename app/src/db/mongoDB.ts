import mongoose  from "mongoose";

const dbConnection = ()=>{
    
    mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true, useUnifiedTopology:true});
    const db = mongoose.connection;

     db.on('error', err => console.info('error :',err));
     db.once('open',() => console.info("db connection established"));
};

export {dbConnection}