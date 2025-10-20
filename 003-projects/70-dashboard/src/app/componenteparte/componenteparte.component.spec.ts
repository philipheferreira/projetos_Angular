import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteparteComponent } from './componenteparte.component';

describe('ComponenteparteComponent', () => {
  let component: ComponenteparteComponent;
  let fixture: ComponentFixture<ComponenteparteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteparteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
