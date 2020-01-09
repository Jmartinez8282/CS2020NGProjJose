import { Component, OnInit } from '@angular/core';
import { Student} from 'src/app/student';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash: Student [] = [
    {
      fName : 'Jon',
      lName : 'Sweart',
      sName : 'jon',
      pNumber : 4444444
    },
    {
      fName : 'Lour',
      lName : 'c',
      sName :  'd',
      pNumber : 4444444
    }
  ];  
  constructor() { }

  ngOnInit() {
  }

}
