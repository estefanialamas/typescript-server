import User from "./domain/models/user";
import {UserRepository} from "./presentation/user-repository";


export class UserRepositoryMongo implements UserRepository {

    save(user: User): void {
        console.log('save user', user)
    };


    findByName(name: string): User {
        console.log('find user by name', name)
        return {} as User;
    }

}