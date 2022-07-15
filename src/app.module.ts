import { GenreModule } from './genre/genre.module';
import { UserModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req }) => {
        const token =
          req.headers['authorization'] || req.headers['Authorization'] || '';
        return { token };
      },
    }),
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    UserModule,
    GenreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
