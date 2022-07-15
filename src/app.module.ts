import { AlbumsModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { GenreModule } from './genre/genre.module';
import { UserModule } from './users/users.module';
import { ArtistModule } from './artist/artist.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { BandModule } from './band/band.module';
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
    ArtistModule,
    BandModule,
    TrackModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
