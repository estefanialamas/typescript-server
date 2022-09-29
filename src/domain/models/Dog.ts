enum Breed {
    POODLE,
    GOLDEN_RETRIEVER,
    CHIHUAHA,
    CAVALIER,
    BEAGLE,
    BICHON_FRISE,
    BORDER_COLLIE,
    GREYHOUND,
    DACHSUND
}

class Dog {
    name: string;
    breed: Breed;

    constructor(name: string, breed: Breed) {
        this.name = name;
        this.breed = breed;
    }

    bark():void {
        console.log(`Woof! my name is ${this.name} and I'm a ${this.breed}`)
    }
}



export { Dog, Breed };