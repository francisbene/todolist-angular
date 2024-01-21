import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingFormsComponent } from './components/two-way-binding-forms/two-way-binding-forms.component';
import { FormsModule } from '@angular/forms';
import { Login } from './components/login/Login';
import { User } from './components/login/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    AboutComponent,
    TodoListComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    PipesComponent,
    TwoWayBindingFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName = 'Joaqim';

  courseName: string = 'Angular';

  loginModel: Login = new Login('','');

  users: User [] = [
    new User ('user1','password1'),
    new User ('user2' , 'password2')

  ]
  onSubmit() {
    console.log('username', this.loginModel.username);
    console.log('password', this.loginModel.password);

    const foundUser = this.users.find(user => user.username === this.loginModel.username && user.password === this.loginModel.password )
    if (foundUser) {
      alert('Login realizado com sucesso!');
    }else {
      alert('Usuário ou senha invalido!');
    }
  }



  userData ={
    email: 'fmmcba1@gamil.com',
    role: 'Admin',
  };

  title = 'todolist-angular';
}
