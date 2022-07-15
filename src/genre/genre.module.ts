import { GenreResolver } from './genre.resolver';
import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';

@Module({
  providers: [GenreResolver, GenreService],
})
export class GenreModule {}
