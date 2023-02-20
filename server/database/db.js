import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection = async()=>{


    const URL =`mongodb://${USERNAME}:${PASSWORD}@ac-fvgmcf3-shard-00-00.yw69coz.mongodb.net:27017,ac-fvgmcf3-shard-00-01.yw69coz.mongodb.net:27017,ac-fvgmcf3-shard-00-02.yw69coz.mongodb.net:27017/?ssl=true&replicaSet=atlas-8z5fbi-shard-0&authSource=admin&retryWrites=true&w=majority`

    //mongodb://user:<password>
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true });
         console.log("database is connected")
    }
    catch(error){
        console.log("Error",error.message);
    }
}
export default Connection;