import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Genre } from 'src/genre/models/genre';

@ObjectType()
export class Member {
  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  secondName: string;

  @Field({ nullable: true })
  middleName: string;

  @Field({ nullable: true })
  instrument: string;

  @Field(() => [String], { nullable: true })
  years: string[];
}

@ObjectType()
export class Band {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  origin: string;

  @Field(() => [Member], { nullable: true })
  bands: Member[];

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => [Genre], { nullable: true })
  genres: Genre[];
}
