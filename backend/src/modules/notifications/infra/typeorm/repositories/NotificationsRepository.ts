import { getMongoRepository, MongoRepository } from 'typeorm';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '../schemas/Notification';

// DTO - Data Transfer Object (Use objeto pra transferir dados de um arquivo pra outro)

// SOLID - "L"iskov Substitution Principle
// Possível a substituição de algumas tecnologias

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({ content, recipient_id });

    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
