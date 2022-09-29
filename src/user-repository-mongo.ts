import { Dog } from "./domain/models/dog";
import User from "./domain/models/user";
import { UserRepository } from "./presentation/user-repository";


// const MONGO_URI = process.env.MONGODB_URI

// async function connectDB () {
//     try {
//         await mongoose.connect(MONGO_URI);
//         console.log('MongoDB connected!');
//     } catch (err) {
//         console.log('Failed to connect to MongoDB', err);
//         throw err;
//     }
// }


export class UserRepositoryMongo implements UserRepository {

    save(user: User): void {
        console.log('save user', user)
    };


    findByName(name: string): User {
        console.log('find user by name', name)
        return {} as User;
    }

    declarePet(user: User, dog: Dog): void {
        throw new Error("Method not implemented.");
    }
}