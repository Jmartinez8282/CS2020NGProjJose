import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dService:DataService) { }

  ngOnInit() {
  }
logIn(userName:string,passWord:string){
//we are going to compare password sore in our servi
if(this.dService.checkCred(userName,passWord)){
  alert ('you are LoggedIn');
}else{
  alert ('Try again');
}
}
}
