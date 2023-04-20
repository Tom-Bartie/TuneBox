import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaggieComponent } from './maggie.component';

describe('MaggieComponent', () => {
  let component: MaggieComponent;
  let fixture: ComponentFixture<MaggieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaggieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
