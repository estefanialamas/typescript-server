import User from '../domain/models/user'
import { Dog } from '../domain/models/dog'

export interface UserRepository {
    findByName(name: string): User;
    save(user: User): void;
}
