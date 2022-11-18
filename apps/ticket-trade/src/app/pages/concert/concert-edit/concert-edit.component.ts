import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '@ticket-trade/shared/services';
import { Concert } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-concert-edit',
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.css']
})
export class ConcertEditComponent implements OnInit {

  id: string | null | undefined;
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
  constructor(private route: ActivatedRoute, private router: Router, private concertService: ConcertService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      if (this.id) {
          // Bestaand concert
          this.concert = this.concertService.getConcertById(this.id);
      } else{
        this.router.navigateByUrl('concerten');
      }
  });
  }

  onSubmit() {
    this.concertService.editConcert(this.concert);
    this.router.navigateByUrl('concerten');
  }

}
