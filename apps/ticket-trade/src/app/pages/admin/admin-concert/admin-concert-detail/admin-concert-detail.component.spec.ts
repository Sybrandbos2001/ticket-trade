import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertDetailComponent } from './admin-concert-detail.component';

describe('AdminConcertDetailComponent', () => {
  let component: AdminConcertDetailComponent;
  let fixture: ComponentFixture<AdminConcertDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConcertDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConcertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
