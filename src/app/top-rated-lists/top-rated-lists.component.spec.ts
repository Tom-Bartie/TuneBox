import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedListsComponent } from './top-rated-lists.component';

describe('TopRatedListsComponent', () => {
  let component: TopRatedListsComponent;
  let fixture: ComponentFixture<TopRatedListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
