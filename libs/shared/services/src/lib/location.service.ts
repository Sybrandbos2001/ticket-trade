import { Injectable } from '@angular/core';
import { Location } from '@ticket-trade/shared/domains';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private locations: Location[];
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
        id: '4',
        name: 'MEZZ Breda',
        surface: 2000,
        street: 'Keizerstraat',
        houseNumber: 101,
        postalCode: '4811 HL',
        city: 'Breda',
        country: 'Nederland'
      },
    ];
  }

  public getLocations(): Location[] {
    return this.locations;
  }

  public getLocationById(id: string): Location {
    return this.locations.filter((Location: Location) => Location.id === id)[0];
  }

  public addLocation(location: Location): void {
    const id = (this.locations.length) + 1;
    location.id = id.toString();
    this.locations.push(location);
  }

  public editLocation(Location: Location): void{
    for( let i = 0; i < this.locations.length; i++){ 
      if ( this.locations[i].id === Location.id ) { 
        this.locations[i].name          = Location.name;
        this.locations[i].surface       = Location.surface;
        this.locations[i].street        = Location.street;
        this.locations[i].houseNumber   = Location.houseNumber;
        this.locations[i].postalCode    = Location.postalCode;
        this.locations[i].city          = Location.city;
        this.locations[i].country       = Location.country;

      }
    }
  }

  public removeLocation(id: string): void {
    for( let i = 0; i < this.locations.length; i++){ 
      if ( this.locations[i].id === id) { 
          this.locations.splice(i, 1); 
      }
    }
  }
}
