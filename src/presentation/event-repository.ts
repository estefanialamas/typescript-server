import { Dog } from "../domain/models/Song";

export interface DogRepository {
    findByName(name: string): Dog;
    save(dog: Dog): void;
}