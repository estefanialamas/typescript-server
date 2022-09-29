import { Dog } from "./dog";

class User {
    name: string;
    dogs: Dog[];

    constructor(name: string, dogs: Dog[]) {
        this.name = name;
        this.dogs = dogs;
    }

    introduce(): void {
        console.log(`Hi my name is ${this.name}`)
        if(this.dogs.length == 0) {
            console.log('and i have no dogs :(');
        }
        else {
            console.log(`And my dogs are: ${this.dogs.map(dog => dog.name).join(', ')}`)
            
        }
    }

}

export default User;