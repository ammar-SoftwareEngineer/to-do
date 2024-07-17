import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ToDoComponent } from './components/todos/todos.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { path: " ", redirectTo: '/todos', pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "todos", component: ToDoComponent, title: "Todo" },
    { path: "todos/:id", component: TodoDetailsComponent, title: "Todo Details" },
    { path: "contactus", component: ContactusComponent, title: "Contact US" },
    { path: "aboutus", component: AboutusComponent, title: "About US" },
    { path: "**", component: NotfoundComponent, title: "Not Found" },


];
