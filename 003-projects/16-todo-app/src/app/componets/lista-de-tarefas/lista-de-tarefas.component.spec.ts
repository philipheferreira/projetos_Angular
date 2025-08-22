import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTarefas } from './lista-de-tarefas.component';

describe('ListaDeTarefas', () => {
  let component: ListaDeTarefas;
  let fixture: ComponentFixture<ListaDeTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
