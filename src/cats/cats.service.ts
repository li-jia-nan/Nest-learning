import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  getHello(): string {
    return 'Hello World!';
  }
  create(createCatDto: CreateCatDto) {
    return createCatDto;
  }
}
