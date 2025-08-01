import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoEInputComponent } from './botao-e-input.component';

describe('BotaoEInputComponent', () => {
  let component: BotaoEInputComponent;
  let fixture: ComponentFixture<BotaoEInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoEInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoEInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
