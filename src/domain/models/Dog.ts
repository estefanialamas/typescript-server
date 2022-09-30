class Dog {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    bark():void {
        console.log(`Woof! my name is ${this.name} and I'm a ${this.breed}`)
    }
}



export { Dog };