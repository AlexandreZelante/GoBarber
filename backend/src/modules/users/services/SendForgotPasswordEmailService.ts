// import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
// import User from '../infra/typeorm/entities/User';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
}

// S = Single Responsibility Principle
// inversão de dependencia: D = Dependency inversion principle

@injectable()
export default class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailprovider: IMailProvider,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    this.mailprovider.sendMail(
      email,
      'Pedido de recuperação de senha recebido',
    );
  }
}
