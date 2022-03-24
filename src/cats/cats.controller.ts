import { ObjectSchema } from '@hapi/joi';
import {
  Body,
  Catch,
  Controller,
  Get,
  HttpException,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { JoiValidationPipe } from './validate.pipe';
import { LoggingInterceptor } from './logging.interceptor';

@Controller()
@Catch(HttpException)
@UseInterceptors(LoggingInterceptor)
@UseGuards(new RolesGuard(null as Reflector))
export class CatsController {
  constructor(private readonly service: CatsService) {}
  @Get()
  find(): string {
    return this.service.getHello();
  }
  @Post()
  @Roles('admin')
  @UsePipes(new JoiValidationPipe(null as unknown as ObjectSchema<CreateCatDto>))
  async create(@Body() createCatDto: CreateCatDto) {
    this.service.create(createCatDto);
  }
}
