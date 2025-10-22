import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCyberpunkComponent } from './modal-cyberpunk.component';

describe('ModalCyberpunkComponent', () => {
  let component: ModalCyberpunkComponent;
  let fixture: ComponentFixture<ModalCyberpunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCyberpunkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCyberpunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
