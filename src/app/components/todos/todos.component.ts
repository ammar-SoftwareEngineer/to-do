import { ToDoService } from './../../services/to-do.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class ToDoComponent implements OnInit {
  Title: string = "To Do List  Application"
  imgSrc: string = "./assets/flat-lay-notebook-with-list-desk.jpg"

  isAvalible: boolean = false;


  todos: ToDo[] = []
  newToDo: ToDo = {} as ToDo

  constructor(private _ToDoService: ToDoService) { }
  ngOnInit(): void {
    this.getToDos()
  }

  getToDos(): void {
    this._ToDoService.getAllTodos().subscribe({
      next: (response) => {
        this.todos = response
        console.log(this.todos);

      }
    })
  }
  createToDos(): void {
    const newToDo1 = { id: this.newToDo.id, title: this.newToDo.title, completed: false }
    this.newToDo = newToDo1
    this._ToDoService.createToDo(this.newToDo).subscribe({
      next: (response) => {
        console.log(response);
        this.todos.push(response)
      }
    })
  }
  deleteToDos(id: string): void {
    this._ToDoService.deleteToDo(id).subscribe({
      next: (response) => {
        console.log(response);
        this.todos = this.todos.filter(todo => todo.id !== id)
      }
    })
  }

}
