import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '@ticket-trade/shared/services';
import { Location } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-admin-location-edit',
  templateUrl: './admin-location-edit.component.html',
  styleUrls: ['./admin-location-edit.component.css']
})
export class AdminLocationEditComponent implements OnInit {

  id: string | null | undefined;
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
    
  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
          // Bestaand concert
          this.location = this.locationService.getLocationById(this.id);
      } else{
        this.router.navigateByUrl('admin/locaties');
      }
  });
  }

  onSubmit() {
    this.locationService.editLocation(this.location);
    this.router.navigateByUrl('admin/locaties');
  }

}
