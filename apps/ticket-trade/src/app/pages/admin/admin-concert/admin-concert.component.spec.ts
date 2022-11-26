import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertComponent } from './admin-concert.component';

describe('AdminConcertComponent', () => {
  let component: AdminConcertComponent;
  let fixture: ComponentFixture<AdminConcertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConcertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
