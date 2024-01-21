import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }
  //togle
  showMensage(): void {
    this.show= !this.show;

  }

}
