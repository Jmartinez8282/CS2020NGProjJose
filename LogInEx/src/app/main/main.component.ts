import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dService:DataService) { 
    dService.setUserList();
  }

  ngOnInit() {
  }
signUp(uName:string,fName:string,lName:string,em:string,cem:string, pWord:string, cPW:string){
//check if email is confirmed
//check if password is the same
//

  //we are going to compare password sore in our servi


if ( em === cem && pWord.length > 3){
if (pWord === cPW)
if(this.dService.checkIfUserExists(uName)){
  alert ('User Name already Exists');

}else{
  let addThisName: User = {
    userName: uName,
    firstName: fName, 
   lastName: lName,
   email:em ,
   passWord: pWord, 
  }
  this.dService.addUser(addThisName);
}else{
  alert('password does not match')
}
}else{
  alert('an unexpected erro accoured.')
}
}
 logIn(userName:string,passWord:string){
   if(this.dService.checkCred(userName,passWord)){
     alert ('you are LoggedIn');
   }else{
     alert ('Try again');
   }
 }
}


