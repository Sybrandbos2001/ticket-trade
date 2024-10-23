import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from '../artist/artist.module';
import { ConcertModule } from '../concert/concert.module';
import { GenreModule } from '../genre/genre.module';
import { LocationModule } from '../location/location.module';
import { TicketModule } from '../ticket/ticket.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env` }), // Load environment .env file
    MongooseModule.forRoot(process.env.NODE_ENV === 'production' ? process.env.MONGO_PROD_URL : process.env.MONGO_LOCAL_URL), // Use connection string based on environment
    ArtistModule,
    ConcertModule,
    GenreModule,
    LocationModule,
    TicketModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
