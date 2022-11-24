import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '@ticket-trade/shared/services';
import { Concert } from '@ticket-trade/shared/domains';

@Component({
  selector: 'ticket-trade-admin-concert-detail',
  templateUrl: './admin-concert-detail.component.html',
  styleUrls: ['./admin-concert-detail.component.css']
})
export class AdminConcertDetailComponent implements OnInit {
  
  id: string | null | undefined;
  concert: Concert | undefined;

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

}
