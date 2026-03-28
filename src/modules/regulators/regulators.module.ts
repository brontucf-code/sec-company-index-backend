import { Module } from '@nestjs/common';
import { RegulatorsController } from './regulators.controller';
import { RegulatorsService } from './regulators.service';

@Module({
  controllers: [RegulatorsController],
  providers: [RegulatorsService],
  exports: [RegulatorsService],
})
export class RegulatorsModule {}
