import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFirstRowComponent } from './not-first-row.component';

describe('NotFirstRowComponent', () => {
  let component: NotFirstRowComponent;
  let fixture: ComponentFixture<NotFirstRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFirstRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFirstRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
