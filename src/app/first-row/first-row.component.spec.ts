import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRowComponent } from './first-row.component';

describe('FirstRowComponent', () => {
  let component: FirstRowComponent;
  let fixture: ComponentFixture<FirstRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
