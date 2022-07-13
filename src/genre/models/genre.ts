import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
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
