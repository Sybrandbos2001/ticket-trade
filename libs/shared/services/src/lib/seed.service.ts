import { Injectable } from '@angular/core';
import { Location, Concert } from '@ticket-trade/shared/domains';

@Injectable({ providedIn: 'root' })
export class SeedService {
  private locations: Location[];
  private concerts: Concert[];
  constructor() {
    //Seed data
    this.locations = [
      {
        id: '1',
        name: 'Rotterdam Ahoy',
        surface: 30000,
        street: 'Ahoyweg',
        houseNumber: 10,
        postalCode: '3084 BA',
        city: 'Rotterdam',
        country: 'Nederland'
      },
      {
        id: '2',
        name: 'Breepark',
        surface: 8300,
        street: 'Bavelseparklaan',
        houseNumber: 7,
        postalCode: '4817 ZX',
        city: 'Breda',
        country: 'Nederland'
      },
      {
        id: '3',
        name: 'AFAS Live',
        surface: 10000,
        street: 'Johan Cruijff Boulevard',
        houseNumber: 590,
        postalCode: '1101 DS',
        city: 'Amsterdam',
        country: 'Nederland'
      },
      {
        id: '4',
        name: 'Zeelandhallen Goes',
        surface: 15000,
        street: 'Da Vinciplein',
        houseNumber: 1,
        postalCode: '4426 GX',
        city: 'Goes',
        country: 'Nederland'
      },
      {
        id: '5',
        name: 'MEZZ Breda',
        surface: 2000,
        street: 'Keizerstraat',
        houseNumber: 101,
        postalCode: '4811 HL',
        city: 'Breda',
        country: 'Nederland'
      },
    ];

    this.concerts = [
        {
          id: '1',
          name: 'Coldplay - Music Of The Spheres World Tour',
          description: 'De Music of the Spheres World Tour is de achtste concerttournee die momenteel wordt ondernomen door de Britse rockband Coldplay. Het werd aangekondigd op 14 oktober 2021 ter ondersteuning van hun negende studioalbum Music of the Spheres en markeerde een terugkeer naar live optreden na de COVID-19-pandemie.',
          startDateTime: new Date('Sun Jul 16 2023 20:30:00'),
          endDateTime: new Date('Sun Jul 16 2023 23:00:00'),
          location: this.locations[0],
          locationId: "1",
          artist: 'Coldplay',
          price: 200,
          amountTickets: 2000,
        },
        {
          id: '2',
          name: 'The Chainsmokers',
          description: 'The Chainsmokers is een Amerikaans dj-duo bestaande uit Andrew Taggart en Alex Pall. Tevens heeft in 2017 ook de drummer Matt McGuire zich bij de band gevoegd.',
          startDateTime: new Date('Wen Nov 16 2022 20:00:00'),
          endDateTime: new Date('Wen Nov 16 2022 23:00:00'),
          location: this.locations[1],
          locationId: "2",
          artist: 'The Chainsmokers',
          price: 175,
          amountTickets: 2500,
        },
        {
          id: '3',
          name: 'Red Hot Chili Peppers- 20th Anniversary European Tour 2022',
          description:'Red Hot Chilli Peppers is een Keltische rockband uit Schotland. Gevormd in 2002, werden ze internationaal populair in 2007 na het winnen van de BBC-talentenshow When Will I Be Famous?',
          startDateTime: new Date('Wen Nov 23 2022 20:00:00'),
          endDateTime: new Date('Wen Nov 23 2022 23:00:00'),
          location: this.locations[2],
          locationId: "3",
          artist: 'Red Hot Chilli Peppers',
          price: 180,
          amountTickets: 1800,
        },
        {
          id: '4',
          name: 'Racoon',
          description:'Racoon is een Nederlandse band die actief is sinds 1997. Ze werden bekend als een melodieuze rockgroep, maar legden zich in de loop der jaren vaker toe op singer-songwriter-achtig repertoire, met een prominente rol voor de akoestische gitaar.',
          startDateTime: new Date('Wen Nov 23 2022 20:00:00'),
          endDateTime: new Date('Wen Nov 23 2022 23:00:00'),
          location: this.locations[3],
          locationId: "4",
          artist: 'Racoon',
          price: 60,
          amountTickets: 1800,
        },
        {
          id: '5',
          name: 'Twenty One Pilots',
          description:'Twenty One Pilots (gestileerd als twenty øne piløts) is een Amerikaanse band uit Columbus, Ohio.',
          startDateTime: new Date('Wen Nov 23 2022 20:00:00'),
          endDateTime: new Date('Wen Nov 23 2022 23:00:00'),
          location: this.locations[4],
          locationId: "5",
          artist: 'Twenty One Pilots',
          price: 100,
          amountTickets: 1800,
        },
      ];
  }

  public getLocationSeedData(): Location[] {
    return this.locations;
  }

  public getConcertSeedData(): Concert[] {
    return this.concerts;
  }
}
