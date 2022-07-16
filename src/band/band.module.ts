import { Module } from '@nestjs/common';
import { ArtistService } from 'src/artist/artist.service';
import { GenreService } from 'src/genre/genre.service';
import { BandsResolver } from './band.resolver';
import { BandService } from './band.service';

@Module({
  providers: [BandsResolver, BandService, GenreService, ArtistService],
})
export class BandModule {}
