import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-way-binding-forms',
  standalone: true,
  imports: [],
  templateUrl: './two-way-binding-forms.component.html',
  styleUrl: './two-way-binding-forms.component.scss'
})
export class TwoWayBindingFormsComponent implements OnInit {

  name: string = 'Francisbene';

  constructor() {}

  ngOnInit(): void {

  }

}
