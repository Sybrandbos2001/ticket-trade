import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService, LocationService } from '@ticket-trade/shared/services';
import { Concert, Location } from '@ticket-trade/shared/domains';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'ticket-trade-admin-concert-create',
  templateUrl: './admin-concert-create.component.html',
  styleUrls: ['./admin-concert-create.component.css']
})
export class AdminConcertCreateComponent implements OnInit {

  locations: Location[];
  disableSelect = new FormControl(false);


  concert: Concert = {
    id: "",
    name: "",
    description: "",
    startDateTime: new Date(),
    endDateTime: new Date(),
    locationId: "",
    artist: "",
    price: 0,
    amountTickets: 0,
};

  constructor(private router: Router, private concertService: ConcertService, private locationService: LocationService) {
    this.locations = this.locationService.getLocations();
   }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.concert.location = this.locationService.getLocationById(this.concert.locationId);
    this.concertService.addConcert(this.concert);
    this.router.navigateByUrl('admin/concerten');
  }

}
