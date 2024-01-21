import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent implements OnInit {
  albuns = [
    {artista: 'Milton Nascimento' , type: 'MPB', musica: 'Maria, Maria'},
    {artista: 'Cassia Eller' , type: 'MPB', musica: 'Segundo Sol'},
    {artista: 'Bruno e Marrone' , type: 'Sertanejo', musica: 'Dormi na praça'},
  ]

  constructor() {}

  ngOnInit(): void {

  }

}
