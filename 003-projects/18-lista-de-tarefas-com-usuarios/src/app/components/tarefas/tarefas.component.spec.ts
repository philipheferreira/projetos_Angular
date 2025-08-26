import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasComponente } from './tarefas.component';

describe('TarefasComponent', () => {
  let component: TarefasComponente;
  let fixture: ComponentFixture<TarefasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
