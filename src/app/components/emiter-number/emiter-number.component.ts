import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emiter-number',
  standalone: true,
  imports: [],
  templateUrl: './emiter-number.component.html',
  styleUrl: './emiter-number.component.scss'
})
export class EmiterNumberComponent implements OnInit{
  @Output() emiterNumber: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {

  }

  handleClick(): void {
    this.emiterNumber.emit();
  }

}
