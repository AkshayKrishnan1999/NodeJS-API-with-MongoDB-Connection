// 1. Import MongoDB Client
import {  MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017/HRdb';

let client;
// 2. Function to connect to the database
export const connectToMongoDB = () => {
    MongoClient.connect(url)
        .then(clientInstance=>{
            client=clientInstance
            console.log("Mongodb is connected");
        })
        .catch(err=>{
            console.log(err);
        })
}


// 3. Function to access the database
export const getDB = () => {
    return client.db();
};
