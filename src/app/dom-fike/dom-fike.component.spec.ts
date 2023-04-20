import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomFikeComponent } from './dom-fike.component';

describe('DomFikeComponent', () => {
  let component: DomFikeComponent;
  let fixture: ComponentFixture<DomFikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomFikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomFikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
