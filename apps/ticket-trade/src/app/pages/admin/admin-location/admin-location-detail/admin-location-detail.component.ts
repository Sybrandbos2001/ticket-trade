import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '@ticket-trade/shared/services';
import { Location } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-admin-location-detail',
  templateUrl: './admin-location-detail.component.html',
  styleUrls: ['./admin-location-detail.component.css']
})
export class AdminLocationDetailComponent implements OnInit {

  id: string | null | undefined;
  location: Location | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
          // Bestaand concert
          this.location = this.locationService.getLocationById(this.id);
      } else{
        this.router.navigateByUrl('concerten');
      }
  });
  }

}
