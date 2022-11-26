import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService, LocationService } from '@ticket-trade/shared/services';
import { Concert, Location} from '@ticket-trade/shared/domains';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ticket-trade-admin-concert-edit',
  templateUrl: './admin-concert-edit.component.html',
  styleUrls: ['./admin-concert-edit.component.css']
})
export class AdminConcertEditComponent implements OnInit {

  locations: Location[];
  disableSelect = new FormControl(false);

  concertStartDateTime: string = "";
  concertEndDateTime: string = "";
  id: string | null | undefined;
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

  constructor(private route: ActivatedRoute, private router: Router, private concertService: ConcertService, private locationService: LocationService) { 
    this.locations = this.locationService.getLocations();
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
          // Bestaand concert
          this.concert = this.concertService.getConcertById(this.id);
          this.concertStartDateTime = this.toDateString(this.concert.startDateTime);
          this.concertEndDateTime = this.toDateString(this.concert.endDateTime);
      } else{
        this.router.navigateByUrl('admin/concerten');
      }
  });
  }

  private toDateString(date: Date): string {
    return (
      date.getFullYear().toString() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      'T' +
      date.toTimeString().slice(0, 5)
    );
  }

  onSubmit() {
    this.concert.startDateTime = new Date(this.concertStartDateTime);
    this.concert.endDateTime = new Date(this.concertEndDateTime);
    this.concertService.editConcert(this.concert);
    this.router.navigateByUrl('admin/concerten');
  }

}
