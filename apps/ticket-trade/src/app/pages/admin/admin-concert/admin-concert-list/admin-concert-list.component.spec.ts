import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertListComponent } from './admin-concert-list.component';

describe('AdminConcertListComponent', () => {
  let component: AdminConcertListComponent;
  let fixture: ComponentFixture<AdminConcertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConcertListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConcertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
