import User from '../domain/models/user'

export interface UserRepository {
    findByName(name: string): User;
    save(user: User):void;
}
