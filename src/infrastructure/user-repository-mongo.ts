import  User from "../domain/models/user";
import { UserRepository } from "../presentation/user-repository";
import * as mongoDB from "mongodb";


export class UserRepositoryMongo implements UserRepository {

    private usersCollection : mongoDB.Collection;

    constructor(usersCollection: mongoDB.Collection) {
        this.usersCollection = usersCollection;
    }

    findByName(name: string): User {
        return new User('not implemented', 'not implemented', []);
    }

    async save(user: User): Promise<void> {
        const userToSave = {
            name: user.name,
            email: user.email,
        }
        await this.usersCollection.insertOne(userToSave);
    }
}