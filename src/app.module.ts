import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as ormConfig from './config/ormconfig';
import { Message } from './entities/message.entity';
import { MessageService } from './services/message.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig.DatabaseConfig),
    TypeOrmModule.forFeature( [Message] ),
  ],
  controllers: [MessagesController],
  providers: [AppService, MessageService],
})
export class AppModule {}
