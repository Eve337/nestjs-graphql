import { Module } from '@nestjs/common';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { TrackService } from 'src/track/track.service';
import { AlbumsResolver } from './album.resolver';
import { AlbumService } from './album.service';

@Module({
  providers: [
    AlbumsResolver,
    AlbumService,
    TrackService,
    BandService,
    GenreService,
    ArtistService,
  ],
})
export class AlbumsModule {}
