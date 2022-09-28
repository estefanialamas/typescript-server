import User from "../models/User";
import UserRepository from "../interfaces/repositories/UserRepository";
class UserRepositoryMongo implements UserRepository {
    save(user: User): void {
        throw new Error("Method not implemented.");
    }


    findByName(name: string): User {
        throw new Error("Method not implemented.");
    }

}