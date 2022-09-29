import * as mongoDB from "mongodb";
import dotenv from "dotenv";

export async function connectToDatabase () {

    dotenv.config();
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI);
    const databaseName = process.env.DB_NAME;
            
    await client.connect();  

    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    const usersCollection: mongoDB.Collection = db.collection('users');
    const dogsCollection: mongoDB.Collection = db.collection('dogs');

    console.log(`Successfully connected to database: '${databaseName}'`);

    return { usersCollection, dogsCollection }
 }