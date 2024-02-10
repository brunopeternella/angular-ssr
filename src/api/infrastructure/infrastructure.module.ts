import { Module } from '@nestjs/common';
import { Injectable } from '@angular/core';
import { UserRepository } from './repositories/user.repository';

@Module({
  providers: [
    UserRepository 
  ],
  exports: [
    UserRepository
  ],
})
export class InfrastructureModule {}

