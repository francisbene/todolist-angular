import { Component } from '@angular/core';


@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.scss'
})
export class IfRenderComponent {
  canShow: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }

}
