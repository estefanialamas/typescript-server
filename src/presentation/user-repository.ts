import User from '../domain/models/Event'

export interface UserRepository {
    findByName(name: string): User;
    save(user: User): void;
}


