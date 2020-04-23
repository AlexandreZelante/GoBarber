import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Reponse {
  user: User;
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Reponse> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    // user.password - senha criptografada
    // password - Senha não-criptografada

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination');
    }

    // Usuário autenticado

    return {
      user,
    };
  }
}
