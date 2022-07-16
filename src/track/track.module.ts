import { Module } from '@nestjs/common';
import { AlbumService } from 'src/album/album.service';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { TrackResolver } from './track.resolver';
import { TrackService } from './track.service';

@Module({
  providers: [
    TrackResolver,
    TrackService,
    AlbumService,
    ArtistService,
    BandService,
    GenreService,
  ],
})
export class TrackModule {}
