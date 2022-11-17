import { Injectable } from '@angular/core';
import { Concert } from '@ticket-trade/shared/domains';

@Injectable({ providedIn: 'root' })
export class ConcertService {
  private concerts: Concert[];
  constructor() {
    //Seed data
    this.concerts = [
      {
        id: 1,
        name: 'Coldplay - Music Of The Spheres World Tour',
        description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        startDateTime: new Date('Sun Jul 16 2023 20:00:00'),
        endDateTime: new Date('Sun Jul 16 2023 23:00:00'),
        location: 'Johan Cruijff ArenA, Amsterdam, Nederland',
        artist: 'Coldplay',
        price: 200,
        amountTickets: 2000,
      },
      {
        id: 2,
        name: 'The Chainsmokers',
        description: 'The Chainsmokers is een Amerikaans dj-duo bestaande uit Andrew Taggart en Alex Pall. Tevens heeft in 2017 ook de drummer Matt McGuire zich bij de band gevoegd.',
        startDateTime: new Date('Wen Nov 16 2022 20:00:00'),
        endDateTime: new Date('Wen Nov 16 2022 23:00:00'),
        location: 'Zénith Paris - La Villette, Parijs, Frankrijk',
        artist: 'The Chainsmokers',
        price: 175,
        amountTickets: 2500,
      },
      {
        id: 3,
        name: 'Red Hot Chili Peppers- 20th Anniversary European Tour 2022',
        description:'Red Hot Chilli Peppers is een Keltische rockband uit Schotland. Gevormd in 2002, werden ze internationaal populair in 2007 na het winnen van de BBC-talentenshow When Will I Be Famous?',
        startDateTime: new Date('Wen Nov 23 2022 20:00:00'),
        endDateTime: new Date('Wen Nov 23 2022 23:00:00'),
        location: 'Volkshaus Basel, Bazel, Zwitserland',
        artist: 'Red Hot Chilli Peppers',
        price: 180,
        amountTickets: 1800,
      },
    ];
  }

  public getConcerts(): Concert[] {
    return this.concerts;
  }

  public getConcertById(Id: number): Concert {
    return this.concerts.filter((concert: Concert) => concert.id === Id)[0];
  }
}
