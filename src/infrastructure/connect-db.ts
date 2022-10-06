import * as mongoDB from "mongodb";
import dotenv from "dotenv";

import { Configuration } from "../domain/configuration";

export async function connectToDatabase (configuration: Configuration) {

    dotenv.config();
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(configuration.dbUri);
    const databaseName = configuration.dbName;
            
    await client.connect();  

    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    const usersCollection: mongoDB.Collection = db.collection('users');
    const dogsCollection: mongoDB.Collection = db.collection('dogs');

    console.log(`Successfully connected to database: '${databaseName}'`);

    return { usersCollection }
 }