import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Album } from 'src/album/models/album';
import { Band } from 'src/band/models/band';
import { Genre } from 'src/genre/models/genre';

@ObjectType()
export class Track {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  title: string;

  @Field(() => Album, { nullable: true })
  @IsNotEmpty()
  album: Album;

  @Field(() => [Band], { nullable: true })
  @IsNotEmpty()
  bands: Band[];

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  duration: number;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  released: number;

  @Field(() => [Genre], { nullable: true })
  @IsNotEmpty()
  genres: Genre[];
}

@InputType()
export class NewTrack {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  title: string;

  @Field(() => Album, { nullable: true })
  @IsNotEmpty()
  album: Album;

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  bands: string[];

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  duration: number;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  released: number;

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  genres: string[];
}
