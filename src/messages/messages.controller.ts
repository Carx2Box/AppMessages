import { Controller, Get, Post, Body, Put, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import * as FromDto from './dto/message';
import { MessageService } from 'src/services/message.service';

@Controller('messages')
export class MessagesController {

    constructor(private messageServices: MessageService) {}

    @Post()
    create(@Body() message: FromDto.Message, @Res() response)  {
      this.messageServices.create(message).then( messageRes => {
          response.status(HttpStatus.CREATED).json(messageRes);
      }).catch( () => {
          response.status(HttpStatus.FORBIDDEN).json({message: 'error creating the message'});
      });
    }

    @Get()
    getAll(@Res() response) {
      this.messageServices.getAll().then( messageList => {
        response.status(HttpStatus.OK).json({message: 'error retrieving the messages'});
      }).catch( () => {
        response.status(HttpStatus.FORBIDDEN).json({message: 'error retrieving the messages'});
      });
    }

    @Put(':id')
    update(@Param('id') id, @Body() message: FromDto.Message, @Res() response) {
      this.messageServices.update(id, message).then( messageRes => {
        return response.status(HttpStatus.OK).json(messageRes);
      }).catch( () => {
        response.status(HttpStatus.FORBIDDEN).json({message: 'error updating the message'});
      });
    }

    @Delete(':id')
    delete(@Param('id') id, @Res() response) {
      this.messageServices.delete(id).then( messageRes => {
        return response.status(HttpStatus.OK).json(messageRes);
      }).catch( () => {
        response.status(HttpStatus.FORBIDDEN).json({message: 'error deleting the message'});
      });
    }
}
