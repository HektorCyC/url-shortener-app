import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { HandlerService } from '../service/handler.service';
import { Response } from 'express';
import { UrlInputModel } from '../model/url-input-model';
import { IShortUrl, UrlKey } from '../model/short-url-interface';

@Controller('url-handler')
export class HandlerController {
  constructor(private readonly handlerService: HandlerService) { }

  @Post()
  create(@Body() body: UrlInputModel) {
    return this.handlerService.create(body);
  }
  @Get()
  sampleGet(@Res() res: Response) {
    return res.send({ hi: "hello" })
  }

  @Get(':id')
  findUrl(@Param('id') id: UrlKey) {
    return this.handlerService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: IShortUrl) {
    return this.handlerService.update({ id }, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.handlerService.remove({ id });
  }
}
