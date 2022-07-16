import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class Genre {
  @Field(() => ID, { nullable: true })
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  name: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  description: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  country: string;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  year: number;
}

@InputType()
export class NewGenre {
  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  name: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  description: string;

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  country: string;

  @Field(() => Int, { nullable: true })
  @IsNotEmpty()
  year: number;
}

@ObjectType()
export class Genres {
  @Field(() => [Genre])
  @IsNotEmpty()
  items: Genre[];

  @Field(() => Int)
  @IsNotEmpty()
  limit: number;

  @Field(() => Int)
  @IsNotEmpty()
  offset: number;

  @Field(() => Int)
  @IsNotEmpty()
  total: number;
}
