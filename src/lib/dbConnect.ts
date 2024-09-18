import { log } from "console";
import mongoose from "mongoose";
type ConnectedObject = {
    isConnected?: number; // kya pta h na aaye yeh isliye we do this 
}

const connection : ConnectedObject = {};
async function dbConnect(): Promise<void> {
    if(connection.isConnected){
    console.log("already connected");
    return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI!);

        connection.isConnected = db.connections[0].readyState;
        console.log('Database is connected');
        console.log(connection.isConnected);
    }catch(error){
        console.log('Database connection failed',error);
        process.exit(1);
    }
}

export default dbConnect;