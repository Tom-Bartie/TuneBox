import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydarktwistedComponent } from './mydarktwisted.component';

describe('MydarktwistedComponent', () => {
  let component: MydarktwistedComponent;
  let fixture: ComponentFixture<MydarktwistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydarktwistedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydarktwistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
