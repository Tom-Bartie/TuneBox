import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoeyComponent } from './joey.component';

describe('JoeyComponent', () => {
  let component: JoeyComponent;
  let fixture: ComponentFixture<JoeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
