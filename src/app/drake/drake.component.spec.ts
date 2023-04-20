import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakeComponent } from './drake.component';

describe('DrakeComponent', () => {
  let component: DrakeComponent;
  let fixture: ComponentFixture<DrakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
