import User from '../../models/User'

interface UserRepository {
    findByName(name: string): User;
    save(user: User):void;
}

export default UserRepository;