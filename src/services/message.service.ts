import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';
import * as FromDto from '../messages/dto/message';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>) {
  }

  async getAll() {
    return await this.messageRepository.find();
  }

  async create(message: FromDto.Message ) {

    const messageAdd = new Message();
    messageAdd.message = message.message;
    messageAdd.nick = message.nick;

    return await this.messageRepository.save(messageAdd);
  }

  async update(id: number, message: FromDto.Message) {
    const messageUpdate = await this.messageRepository.findOne(id);
    messageUpdate.nick = message.nick;
    messageUpdate.message = message.message;

    return this.messageRepository.save(messageUpdate);
  }

  async delete(id: number) {
    return await this.messageRepository.delete(id);
  }
}
