import { Module } from '@nestjs/common';
import { GenreService } from 'src/genre/genre.service';
import { BandsResolver } from './band.resolver';
import { BandService } from './band.service';

@Module({
  providers: [BandsResolver, BandService, GenreService],
})
export class UserModule {}
