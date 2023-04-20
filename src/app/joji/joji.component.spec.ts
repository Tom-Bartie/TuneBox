import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JojiComponent } from './joji.component';

describe('JojiComponent', () => {
  let component: JojiComponent;
  let fixture: ComponentFixture<JojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JojiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
