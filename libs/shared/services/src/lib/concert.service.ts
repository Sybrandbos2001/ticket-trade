import { Injectable } from '@angular/core';
import { Concert } from '@ticket-trade/shared/domains';
import { SeedService } from './seed.service';

@Injectable({ providedIn: 'root' })
export class ConcertService {
  private concerts: Concert[];
  constructor(private seedService: SeedService) {
    //Seed data
    this.concerts = seedService.getConcertSeedData();
  }

  public getConcerts(): Concert[] {
    return this.concerts;
  }

  public getConcertById(id: string): Concert {
    return this.concerts.filter((concert: Concert) => concert.id === id)[0];
  }

  public addConcert(concert: Concert): void {
    const id = (this.concerts.length) + 1;
    concert.id = id.toString();
    this.concerts.push(concert);
  }

  public editConcert(concert: Concert): void{
    for( let i = 0; i < this.concerts.length; i++){ 
      if ( this.concerts[i].id === concert.id ) { 
          this.concerts[i].name           = concert.name;
          this.concerts[i].description    = concert.description;
          this.concerts[i].startDateTime  = concert.startDateTime;
          this.concerts[i].endDateTime    = concert.endDateTime;
          this.concerts[i].location       = concert.location;
          this.concerts[i].artist         = concert.artist;
          this.concerts[i].price          = concert.price;
          this.concerts[i].amountTickets  = concert.amountTickets;
      }
    }
  }

  public removeConcert(id: string): void {
    for( let i = 0; i < this.concerts.length; i++){ 
      if ( this.concerts[i].id === id) { 
          this.concerts.splice(i, 1); 
      }
    }
  }
}
