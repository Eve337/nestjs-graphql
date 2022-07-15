import { Module } from '@nestjs/common';
import { BandService } from 'src/band/band.service';
import { ArtistsResolver } from './artist.resolver';
import { ArtistService } from './artist.service';

@Module({
  providers: [ArtistsResolver, ArtistService, BandService],
})
export class UserModule {}
