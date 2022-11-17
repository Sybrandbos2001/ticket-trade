import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ConcertListComponent } from './pages/concert/concert-list/concert-list.component';
import { ConcertDetailComponent } from './pages/concert/concert-detail/concert-detail.component';
import { ConcertCreateComponent } from './pages/concert/concert-create/concert-create.component';
import { ConcertComponent } from './pages/concert/concert.component';
import { ConcertEditComponent } from './pages/concert/concert-edit/concert-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LandingComponent,
    ConcertListComponent,
    ConcertDetailComponent,
    ConcertCreateComponent,
    ConcertComponent,
    ConcertEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
