import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponentComponent } from './novo-component.component';

describe('NovoComponentComponent', () => {
  let component: NovoComponentComponent;
  let fixture: ComponentFixture<NovoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
