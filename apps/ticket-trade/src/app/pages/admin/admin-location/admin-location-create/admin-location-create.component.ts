import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '@ticket-trade/shared/services';
import { Location } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-admin-location-create',
  templateUrl: './admin-location-create.component.html',
  styleUrls: ['./admin-location-create.component.css']
})
export class AdminLocationCreateComponent implements OnInit {

  location: Location = {
    id: "",
    name: "",
    surface: 0,
    street: "",
    houseNumber: 0,
    postalCode: "",
    city: "",
    country: "",
};

  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.locationService.addLocation(this.location);
    this.router.navigateByUrl('admin/locaties');
  }

}
