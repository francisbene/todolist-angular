import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent, TodoListComponent, IfRenderComponent, EventosComponent, EmiterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName = 'Joaqim';

  userData ={
    email: 'fmmcba1@gamil.com',
    role: 'Admin',
  };

  title = 'todolist-angular';
}
