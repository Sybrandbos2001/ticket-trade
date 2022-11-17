import { Route } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ConcertListComponent } from './pages/concert/concert-list/concert-list.component';

export const appRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: 'concerten', component: ConcertListComponent },
];
