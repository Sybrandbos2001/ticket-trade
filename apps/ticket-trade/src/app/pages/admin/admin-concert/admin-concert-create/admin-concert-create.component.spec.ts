import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConcertCreateComponent } from './admin-concert-create.component';

describe('AdminConcertCreateComponent', () => {
  let component: AdminConcertCreateComponent;
  let fixture: ComponentFixture<AdminConcertCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConcertCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConcertCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
