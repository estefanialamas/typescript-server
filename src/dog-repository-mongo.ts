import * as mongoDB from "mongodb";
import { Dog } from "./domain/models/dog";
import { DogRepository } from "./presentation/dog-repository";

export class DogRepositoryMongo implements DogRepository {

    private dogsCollection: mongoDB.Collection<mongoDB.Document>;

    constructor(dogsCollection: mongoDB.Collection) {
        this.dogsCollection = dogsCollection;
    }

    save(dog: Dog): void {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Dog {
        throw new Error("Method not implemented.");
    }
}