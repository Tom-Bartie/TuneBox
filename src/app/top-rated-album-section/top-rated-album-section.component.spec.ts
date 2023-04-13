import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedAlbumSectionComponent } from './top-rated-album-section.component';

describe('TopRatedAlbumSectionComponent', () => {
  let component: TopRatedAlbumSectionComponent;
  let fixture: ComponentFixture<TopRatedAlbumSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatedAlbumSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedAlbumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
