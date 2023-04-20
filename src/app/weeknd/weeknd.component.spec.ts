import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekndComponent } from './weeknd.component';

describe('WeekndComponent', () => {
  let component: WeekndComponent;
  let fixture: ComponentFixture<WeekndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
