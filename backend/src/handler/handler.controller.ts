import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { HandlerService } from './handler.service';
import { CreateHandlerDto } from './dto/create-handler.dto';
import { UpdateHandlerDto } from './dto/update-handler.dto';
import { Response } from 'express';

@Controller('url-handler')
export class HandlerController {
  constructor(private readonly handlerService: HandlerService) { }

  @Post()
  create(@Body() createHandlerDto: CreateHandlerDto) {
    const request = this.handlerService.create(createHandlerDto);
    return request;
  }
  @Get()
  sampleGet(@Res() res: Response) {
    return res.send({hi: "hello"})
  }
  
  @Get(':id')
  async findUrl(@Param('id') id: string, @Res() res: Response,
  ): Promise<any> {
    try {
      const isExistingUrl = this.handlerService.findById(id);
      // if (isExistingUrl) {
      //   return res.redirect(HttpStatus.PERMANENT_REDIRECT, isExistingUrl);
      // }
      return this.handlerService.findById(id);
    } catch (error) {

    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHandlerDto: UpdateHandlerDto) {
    return this.handlerService.update(+id, updateHandlerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handlerService.remove(+id);
  }
}
