import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExemploComponent } from './modal-exemplo.component';

describe('ModalExemploComponent', () => {
  let component: ModalExemploComponent;
  let fixture: ComponentFixture<ModalExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
