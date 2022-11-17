import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '@ticket-trade/shared/services';
import { Concert } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-concert-create',
  templateUrl: './concert-create.component.html',
  styleUrls: ['./concert-create.component.css']
})
export class ConcertCreateComponent implements OnInit {

  concert: Concert = {
      id: "",
      name: "",
      description: "",
      startDateTime: new Date(),
      endDateTime: new Date(),
      location: "",
      artist: "",
      price: 0,
      amountTickets: 0,
  };
  constructor(private router: Router, private concertService: ConcertService) { }

  ngOnInit(): void {}
  
  onSubmit() {
    this.concertService.addConcert(this.concert);
    this.router.navigateByUrl('concerten');
  }
}
