import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
};

bootstrap();
