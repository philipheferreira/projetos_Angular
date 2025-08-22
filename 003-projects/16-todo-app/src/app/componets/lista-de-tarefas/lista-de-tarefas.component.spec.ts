import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listaDeTarefas } from './lista-de-tarefas.component';

describe('listaDeTarefas', () => {
  let component: listaDeTarefas;
  let fixture: ComponentFixture<listaDeTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [listaDeTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(listaDeTarefas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
