import { Component, OnInit } from '@angular/core';
import { ConcertService } from '@ticket-trade/shared/services';
import { Concert } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.css'],
})
export class ConcertListComponent implements OnInit {
  concerts: Concert[] = [];

  constructor(private concertService: ConcertService) {}

  ngOnInit(): void {
    this.getConcerts();
  }

  getConcerts(): void {
    this.concerts = this.concertService.getConcerts();
  }
}
