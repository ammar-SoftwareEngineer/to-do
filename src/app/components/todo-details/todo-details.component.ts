import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToDo } from '../../Models/to-do';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router, private _ToDoService: ToDoService) { }
  todo: ToDo | undefined
  Title: string = "Update ToDo"
  imgSrc: string = "./assets/top-view-abstract-innovation-assortment.jpg"

  ngOnInit(): void {
    this.getId()
  }

  getId(): void {
    //   this._ActivatedRoute.paramMap.subscribe({
    //     next:(params)=>{
    // this.id =params.get("id")
    //     }
    //   })
    // ############# or
    let id = String(this._ActivatedRoute.snapshot.paramMap.get('id'))
    this._ToDoService.getTodoById(id).subscribe({
      next: (response) => {
        this.todo = response
        console.log(this.todo);
      }
    })
  }
  updateToDos(): void {
    if (this.todo) {
      this._ToDoService.updateToDo(this.todo).subscribe({
        next: (response) => {
          console.log(response);
          this._Router.navigate(['/todos'])
        }
      })
    }

  }
}
