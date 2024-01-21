import { Component } from '@angular/core';
import { EmiterNumberComponent } from '../emiter-number/emiter-number.component';

@Component({
  selector: 'app-emiter',
  standalone: true,
  imports: [EmiterNumberComponent],
  templateUrl: './emiter.component.html',
  styleUrl: './emiter.component.scss'
})
export class EmiterComponent {
  myNumber: number = 0;
  constructor() {}

  ngOnInit(): void {

  }

  onChageNumber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }


}
