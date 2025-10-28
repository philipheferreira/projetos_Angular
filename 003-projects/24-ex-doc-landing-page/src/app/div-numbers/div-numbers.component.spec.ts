import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivNumbersComponent } from './div-numbers.component';

describe('DivNumbersComponent', () => {
  let component: DivNumbersComponent;
  let fixture: ComponentFixture<DivNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
