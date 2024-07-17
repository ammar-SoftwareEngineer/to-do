import { ToDoComponent } from './components/todos/todos.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ToDoComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'ToDoList';
}




