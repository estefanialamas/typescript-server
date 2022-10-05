import User from '../domain/models/User'

export interface UserRepository {
    getUserByAccessToken(accessToken: string): Promise<User>;
}


