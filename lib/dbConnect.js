import {connect,connection} from "mongoose";

const conn = {
    isConnected:false
}

export async function dbConnect(){
    if(conn.isConnected)return;
    const db = await connect(process.env.MONGO_URI);

    conn.isConnected = db.connections[0].readyState;
    console.log(`MongoDB is ${conn.isConnected ? 'online' : 'offline'}`);
};

connection.on('connected',()=>{
    console.log('connected to mongoose')
})

connection.on('error',(err)=>{
    console.log('connection error',err)
})