import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
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

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  name: string;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  released: number;

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

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  image: string;
}
@InputType()
export class NewAlbum {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  name: string;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  released: number;

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  artists: string[];

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  bands: string[];

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  tracks: string[];

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  genres: string[];

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  image: string;
}
