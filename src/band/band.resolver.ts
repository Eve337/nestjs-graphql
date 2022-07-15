import { NewBand } from './models/band';
import { Band } from 'src/band/models/band';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GenreService } from 'src/genre/genre.service';
import { BandService } from './band.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandService,
    /* private readonly artistsService: ArtistsService, */
    private readonly genresService: GenreService,
  ) {}
  @Query(() => Band, { name: 'band', nullable: true })
  getBand(@Args('id') id: string) {
    return this.bandsService.getBand(id);
  }
  @Query('bands')
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
}
