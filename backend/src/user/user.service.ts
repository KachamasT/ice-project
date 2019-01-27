import { Injectable, Inject } from '@nestjs/common';
import { UsersRepository } from '../config';
import Users from '../models/User.model';

@Injectable()
export class UserService {
    constructor(
        @Inject(UsersRepository) private readonly usersRepository: typeof Users,
    ) {}
}
