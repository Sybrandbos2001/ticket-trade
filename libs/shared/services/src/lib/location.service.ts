import { Injectable } from '@angular/core';
import { Location } from '@ticket-trade/shared/domains';
import { SeedService } from './seed.service';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private locations: Location[];
  constructor(private seedService: SeedService) {
    //Seed data
    this.locations = this.seedService.getLocationSeedData();
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
