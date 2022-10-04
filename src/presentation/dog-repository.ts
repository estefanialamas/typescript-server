import { Dog } from "../domain/models/dog";

export interface DogRepository {
    findByName(name: string): Dog;
    save(dog: Dog): void;
}