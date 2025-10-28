import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class Todolist {
  taskArray = [{taskName: 'Concluir o Projeto de lista de tarefas', isCompleted: true},
               {taskName: 'Estudar o Angular', isCompleted: false},
               {taskName: 'Começar Projetos de React', isCompleted: false}];

  constructor() {
    // Initialize the todo list
  }

  ngOnInit(): void {
    // Component initialization logic
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });

    form.reset(); // limpa todos os dados do formulario
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(index);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

}
