import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador } from './contador.component';

describe('Contador', () => {
  let component: Contador;
  let fixture: ComponentFixture<Contador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
