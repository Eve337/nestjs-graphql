import { Artist } from 'src/artist/models/artist';
import { NewArtist } from './models/artist';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ArtistService } from './artist.service';
import { BandService } from 'src/band/band.service';

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistService,
    private readonly bandsService: BandService,
  ) {}
  @Query(() => Artist, { name: 'artist', nullable: true })
  artist(@Args('id') id: string) {
    return this.artistsService.getArtist(id);
  }
  @Query(() => Artist, { name: 'artists', nullable: true })
  artists(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.artistsService.getArtists(limit, offset);
  }
  @Mutation(() => Artist, { name: 'createArtist', nullable: true })
  createArtist(
    @Args('artist') artist: NewArtist,
    @Context('token') token: string,
  ) {
    return this.artistsService.createArtist(artist, token);
  }

  @Mutation(() => Artist, { name: 'updateArtist', nullable: true })
  updateArtist(
    @Args('id') id: string,
    @Args('updateArtist') artist: NewArtist,
    @Context('token') token: string,
  ) {
    return this.artistsService.updateArtist(id, artist, token);
  }
  @Mutation(() => Artist, { name: 'deleteArtist', nullable: true })
  deleteArtist(@Args('id') id: string, @Context('token') token: string) {
    return this.artistsService.deleteArtist(id, token);
  }
  @ResolveField()
  async bands(@Parent() artist) {
    const { bandsIds } = artist;
    return await Promise.all(
      bandsIds.map(async (band) => {
        return this.bandsService.getBand(band);
      }),
    );
  }
}
