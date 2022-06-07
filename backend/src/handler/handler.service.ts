import { Injectable } from '@nestjs/common';
import { createUrl } from 'src/infrastructure/models/create-url-model';
import HashGenerator from 'src/utils/hash-generator';
import { CreateHandlerDto } from './dto/create-handler.dto';
import { UpdateHandlerDto } from './dto/update-handler.dto';

@Injectable()
export class HandlerService {
  findById(id: string): string {
    // ToDo: Find the requested ID
    
    return `Requesting ID: ${id}`
  }
  
  async create(request: CreateHandlerDto) {
    const hashId: string = HashGenerator.generate();
    try {
      await createUrl(request.url, hashId).then(response => console.log(response));

      return `Created sucessfully with the id ${hashId}`;
    } catch (error) {
      console.log(error)
    }

    return `Your URL Has been generated`
  }

  update(id: number, updateHandlerDto: UpdateHandlerDto) {
    return `This action updates a #${id} handler`;
  }

  remove(id: number) {
    return `This action removes a #${id} handler`;
  }
}
