import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDiasComponent } from './grid-dias.component';

describe('GridDiasComponent', () => {
  let component: GridDiasComponent;
  let fixture: ComponentFixture<GridDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
