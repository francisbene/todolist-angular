import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
    name: string = 'Francisbene';
    age: number= 50;
    job = 'programador';
    hobbies = ['correr','estudar', 'música'];
    carro = {
      marca: 'Polo',
      ano: 2019,
    }


    constructor() {}

    ngOnInit(): void {

    }


}
