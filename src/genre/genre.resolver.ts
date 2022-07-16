import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { GenreService } from './genre.service';
import { Genre, NewGenre } from './models/genre';

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Query(() => Genre, { name: 'genre', nullable: true })
  genre(@Args('id') id: string) {
    return this.genreService.getGenre(id);
  }

  @Query(() => [Genre], { name: 'genres', nullable: true })
  genres(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.genreService.getGenres(limit, offset);
  }

  @Mutation(() => Genre, { name: 'createGenre', nullable: true })
  createGenre(
    @Args('newGenre') genre: NewGenre,
    @Context('token') token: string,
  ) {
    return this.genreService.createGenre(genre, token);
  }

  @Mutation(() => Genre, { name: 'updateGenre', nullable: true })
  updateGenre(
    @Args('id') id: string,
    @Args('updateGenre') updateGenre: NewGenre,
    @Context('token') token: string,
  ) {
    return this.genreService.updateGenre(id, updateGenre, token);
  }

  @Mutation(() => Genre, { name: 'deleteGenre', nullable: true })
  deleteGenre(@Args('id') id: string, @Context('token') token: string) {
    return this.genreService.deleteGenre(id, token);
  }
}
