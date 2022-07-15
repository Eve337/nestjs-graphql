import { Album } from 'src/album/models/album';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { AlbumService } from './album.service';
import { NewAlbum } from './models/album';
import { TrackService } from 'src/track/track.service';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumService,
    private readonly artistsService: ArtistService,
    private readonly bandsService: BandService,
    private readonly genresService: GenreService,
    private readonly tracksService: TrackService,
  ) {}
  @Query(() => Album, { name: 'album', nullable: true })
  album(@Args('id') id: string) {
    return this.albumsService.getAlbum(id);
  }
  @Query(() => Album, { name: 'albums', nullable: true })
  albums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAlbums(limit, offset);
  }
  @Mutation(() => Album, { name: 'createAlbum', nullable: true })
  createAlbum(@Args('album') Album: NewAlbum, @Context('token') token: string) {
    return this.albumsService.createAlbum(Album, token);
  }

  @Mutation(() => Album, { name: 'updateAlbum', nullable: true })
  updateAlbum(
    @Args('id') id: string,
    @Args('album') Album: NewAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.updateAlbum(id, Album, token);
  }
  @Mutation(() => Album, { name: 'deleteAlbum', nullable: true })
  deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.deleteAlbum(id, token);
  }

  @ResolveField()
  async artists(@Parent() album) {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map(async (artist) => {
        return this.artistsService.getArtist(artist);
      }),
    );
  }
  @ResolveField()
  async bands(@Parent() album) {
    const { bandsIds } = album;
    return await Promise.all(
      bandsIds.map(async (band) => {
        return this.bandsService.getBand(band);
      }),
    );
  }
  @ResolveField()
  async genres(@Parent() album) {
    const { genresIds } = album;
    return await Promise.all(
      genresIds.map(async (genreId) => {
        return this.genresService.getGenre(genreId);
      }),
    );
  }
  @ResolveField()
  async tracks(@Parent() album) {
    const { trackIds } = album;
    return await Promise.all(
      trackIds.map(async (trackId) => {
        return this.tracksService.getTrack(trackId);
      }),
    );
  }
}
