import { Dog } from "./domain/models/dog";
import User from "./domain/models/user";
import { DogRepository } from "./presentation/dog-repository";

export class DogRepositoryMongo implements DogRepository {
    save(dog: Dog): void {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Dog {
        throw new Error("Method not implemented.");
    }
    declareOwner(dog: Dog, user: User): void {
        throw new Error("Method not implemented.");
    } 
}