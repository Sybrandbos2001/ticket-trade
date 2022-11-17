import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concert } from '@ticket-trade/shared/domains';

@Injectable({ providedIn: 'root' })
export class ConcertService {
  private concerts: Observable<Concert[]>;
  constructor() {
    this.concerts = new Observable<Concert[]>();
  }

  public getConcerts(): Observable<Concert[]> {
    return this.concerts;
  }
}
