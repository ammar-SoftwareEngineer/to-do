import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl = "http://localhost:3000/todos"
  constructor(private _HttpClient: HttpClient) { }
  getAllTodos(): Observable<any> {
    return this._HttpClient.get(this.apiUrl)
  }
  createToDo(todo:ToDo): Observable<any> {
    return this._HttpClient.post(this.apiUrl,JSON.stringify(todo))
  }
  getTodoById(id:string): Observable<any> {
    return this._HttpClient.get(`${this.apiUrl}/${id}`)
  }
  updateToDo(todo:ToDo): Observable<any> {
    return this._HttpClient.put(`${this.apiUrl}/${todo.id}`,todo)
  }
  deleteToDo(todoId:string): Observable<any> {
    return this._HttpClient.delete(`${this.apiUrl}/${todoId}`)
  }
}
