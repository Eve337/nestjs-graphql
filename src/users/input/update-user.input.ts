import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  _id: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  firstName?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  lastName?: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;
}
