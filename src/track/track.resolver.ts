import { Track } from 'src/track/models/track';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AlbumService } from 'src/album/album.service';
import { ArtistService } from 'src/artist/artist.service';
import { BandService } from 'src/band/band.service';
import { GenreService } from 'src/genre/genre.service';
import { NewTrack } from './models/track';
import { TrackService } from './track.service';

@Resolver(() => Track)
export class TrackResolver {
  constructor(
    private readonly tracksService: TrackService,
    private readonly albumsService: AlbumService,
    private readonly artistsService: ArtistService,
    private readonly bandsService: BandService,
    private readonly genresService: GenreService,
  ) {}
  @Query(() => Track, { name: 'track', nullable: true })
  track(@Args('id') id: string) {
    return this.tracksService.getTrack(id);
  }
  @Query(() => Track, { name: 'tracks', nullable: true })
  tracks(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getTracks(limit, offset);
  }
  @Mutation(() => Track, { name: 'createTrack', nullable: true })
  createTrack(
    @Args('createTrack') newTrack: NewTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.createTrack(newTrack, token);
  }

  @Mutation(() => Track, { name: 'updateTrack', nullable: true })
  updateTrack(
    @Args('id') id: string,
    @Args('updateTrack') newTrack: NewTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.updateTrack(id, newTrack, token);
  }
  @Mutation(() => Track, { name: 'deleteTrack', nullable: true })
  deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.deleteTrack(id, token);
  }

  @ResolveField()
  async album(@Parent() track) {
    const { albumId } = track;
    return await this.albumsService.getAlbum(albumId);
  }

  @ResolveField()
  async artists(@Parent() track) {
    const { artistsIds } = track;
    return Promise.all(
      artistsIds.map(async (artistId) => {
        return this.artistsService.getArtist(artistId);
      }),
    );
  }

  @ResolveField()
  async bands(@Parent() track) {
    const { bandsIds } = track;
    return Promise.all(
      bandsIds.map(async (bandId) => {
        return this.bandsService.getBand(bandId);
      }),
    );
  }
  @ResolveField()
  async genres(@Parent() track) {
    const { genresIds } = track;
    return Promise.all(
      genresIds.map(async (genreId) => {
        return this.genresService.getGenre(genreId);
      }),
    );
  }
}
