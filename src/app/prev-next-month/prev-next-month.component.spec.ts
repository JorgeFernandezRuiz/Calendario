import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevNextMonthComponent } from './prev-next-month.component';

describe('PrevNextMonthComponent', () => {
  let component: PrevNextMonthComponent;
  let fixture: ComponentFixture<PrevNextMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevNextMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevNextMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
