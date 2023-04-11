import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularReviewsComponent } from './popular-reviews.component';

describe('PopularReviewsComponent', () => {
  let component: PopularReviewsComponent;
  let fixture: ComponentFixture<PopularReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
