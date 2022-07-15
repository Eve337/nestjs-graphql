import { NewBand } from './models/band';
import { Band } from 'src/band/models/band';
import {
  Args,
  Context,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GenreService } from 'src/genre/genre.service';
import { BandService } from './band.service';
import { ArtistService } from 'src/artist/artist.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandService,
    private readonly artistService: ArtistService,
    private readonly genresService: GenreService,
  ) {}
  @Query(() => Band, { name: 'band', nullable: true })
  getBand(@Args('id') id: string) {
    return this.bandsService.getBand(id);
  }
  @Query(() => [Band], { name: 'bands', nullable: true })
  getBands(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.bandsService.getBands(limit, offset);
  }
  @Mutation('createBand')
  createBand(@Args('band') band: NewBand, @Context('token') token: string) {
    return this.bandsService.createBand(band, token);
  }

  @Mutation('updateBand')
  updateBand(
    @Args('id') id: string,
    @Args('band') band: NewBand,
    @Context('token') token: string,
  ) {
    return this.bandsService.updateBand(id, band, token);
  }
  @Mutation('deleteBand')
  deleteBand(@Args('id') id: string, @Context('token') token: string) {
    return this.bandsService.deleteBand(id, token);
  }

  @ResolveField()
  async genres(@Parent() band) {
    const { genresIds } = band;
    return await Promise.all(
      genresIds.map(async (genre: string) => {
        return this.genresService.getGenre(genre);
      }),
    );
  }

  @ResolveField()
  async members(@Parent() band) {
    const { members } = band;
    return await Promise.all(
      members.map(async (member: { artist: any }) => {
        const artist = await this.artistService.getArtist(member.artist);
        return { ...member, artist };
      }),
    );
  }
}
