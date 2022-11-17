import { Route } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ConcertListComponent } from './pages/concert/concert-list/concert-list.component';
import { ConcertDetailComponent } from './pages/concert/concert-detail/concert-detail.component';

export const appRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: 'concerten/:id', component: ConcertDetailComponent },
  { path: 'concerten', component: ConcertListComponent },
];
