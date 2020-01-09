import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.scss']
})
export class CardcomponentComponent implements OnInit {
@Input() card: Student;
  constructor() { }

  ngOnInit() {
  }

}
