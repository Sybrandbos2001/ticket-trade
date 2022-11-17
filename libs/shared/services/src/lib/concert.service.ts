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
        description:
          'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
        startDateTime: new Date('Sun Jul 16 2023 20:00:00'),
        endDateTime: new Date('Sun Jul 16 2023 23:00:00'),
        amountTickets: 2000,
        location: 'Johan Cruijff ArenA, Amsterdam, Nederland',
        artist: 'Coldplay',
      },
      {
        id: 2,
        name: 'The Chainsmokers',
        description:
          'The Chainsmokers is een Amerikaans dj-duo bestaande uit Andrew Taggart en Alex Pall. Tevens heeft in 2017 ook de drummer Matt McGuire zich bij de band gevoegd.',
        startDateTime: new Date('Wen Nov 16 2022 20:00:00'),
        endDateTime: new Date('Wen Nov 16 2022 23:00:00'),
        amountTickets: 2500,
        location: 'Zénith Paris - La Villette, Parijs, Frankrijk',
        artist: 'The Chainsmokers',
      },
      {
        id: 3,
        name: 'Red Hot Chilli Pipers - 20th Anniversary European Tour 2022',
        description:
          'Red Hot Chilli Pipers is een Keltische rockband uit Schotland. Gevormd in 2002, werden ze internationaal populair in 2007 na het winnen van de BBC-talentenshow When Will I Be Famous?',
        startDateTime: new Date('Wen Nov 23 2022 20:00:00'),
        endDateTime: new Date('Wen Nov 23 2022 23:00:00'),
        amountTickets: 1800,
        location: 'Volkshaus Basel, Bazel, Zwitserland',
        artist: 'Red Hot Chilli Pipers',
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
