import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { SsrController } from './controllers/ssr.controller';

@Module({
  controllers: [
    UserController, 
    SsrController
  ],
  imports: [InfrastructureModule],
})
export class DomainModule {}
