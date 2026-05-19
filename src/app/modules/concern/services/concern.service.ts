import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '@src/app/base';
import { Repository } from 'typeorm';
import { Concern } from '../entities/concern.entity';

@Injectable()
export class ConcernService extends BaseService<Concern> {
  constructor(
    @InjectRepository(Concern)
    private readonly _repo: Repository<Concern>,
  ) {
    super(_repo);
  }
}