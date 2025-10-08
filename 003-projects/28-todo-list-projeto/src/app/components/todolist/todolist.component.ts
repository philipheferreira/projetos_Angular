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
  taskArray = [{taskName: 'Sample Task', isCompleted: false}];

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
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

}
