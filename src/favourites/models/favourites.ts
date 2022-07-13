import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Artist } from 'src/artist/models/artist';
import { Band } from 'src/band/models/band';
import { Genre } from 'src/genre/models/genre';
import { Track } from 'src/track/models/track';

@ObjectType()
export class Album {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  id: string;

  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  userId: string;

  @Field(() => [Artist], { nullable: true })
  @IsNotEmpty()
  artists: Artist[];

  @Field(() => [Band], { nullable: true })
  @IsNotEmpty()
  bands: Band[];

  @Field(() => [Track], { nullable: true })
  @IsNotEmpty()
  tracks: Track[];

  @Field(() => [Genre], { nullable: true })
  @IsNotEmpty()
  genres: Genre[];
}
