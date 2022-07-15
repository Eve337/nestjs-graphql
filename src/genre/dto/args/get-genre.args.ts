import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetGenreArg {
  @Field(() => String)
  @IsNotEmpty()
  id: string;
}
