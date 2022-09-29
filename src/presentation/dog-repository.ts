import { Dog } from "../domain/models/dog";
import User from "../domain/models/user";

export interface DogRepository {
    findByName(name: string): Dog;
    save(dog: Dog): void;
}