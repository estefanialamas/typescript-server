import { Breed, Dog } from "./domain/models/dog";
import  User from "./domain/models/user";
import { UserRepository } from "./presentation/user-repository";
import * as mongoDB from "mongodb";
import dotenv from "dotenv";


export async function connectToDatabase () {

    dotenv.config();
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_URI);
    const databaseName = process.env.MONGODB_DB;
            
    await client.connect();  

    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    const usersCollection: mongoDB.Collection = db.collection('users');
    const dogsCollection: mongoDB.Collection = db.collection('dogs');

    console.log(`Successfully connected to database: ${databaseName} and collection: ${db.collection.name}`);

    return { usersCollection, dogsCollection }
 }


export class UserRepositoryMongo implements UserRepository {

    private usersCollection : mongoDB.Collection;
    private dogsCollection: mongoDB.Collection;

    constructor(usersCollection: mongoDB.Collection, dogsCollection: mongoDB.Collection) {
        this.usersCollection = usersCollection;
        this.dogsCollection = dogsCollection;
    }
    findByName(name: string): User {
        return new User('not implemented', 'not implemented', []);
    }
    declarePet(user: User, dog: Dog): User | Dog {
        return new User('not implemented', 'not implemented', []);
    }

    async save(user: User): Promise<void> {
        const userToSave = {
            name: user.name,
            email: user.email,
            dogs: user.dogs.map(dog => dog.name)
        }

        await this.usersCollection.insertOne(userToSave);
    }
}