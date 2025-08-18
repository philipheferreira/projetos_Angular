import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSecondComponent } from './component-second.component';

describe('ComponentSecondComponent', () => {
  let component: ComponentSecondComponent;
  let fixture: ComponentFixture<ComponentSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
