import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Band } from 'src/band/models/band';

@ObjectType()
export class Artist {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  secondName: string;

  @Field(() => String, { nullable: true })
  middleName: string;

  @Field(() => String, { nullable: true })
  birthDate: string;

  @Field(() => String, { nullable: true })
  birthPlace: string;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => [Band], { nullable: true })
  @IsNotEmpty()
  bands: Band[];

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  genres: string[];
}
