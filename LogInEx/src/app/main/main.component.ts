import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { logging } from 'protractor';
import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dService:DataService) { }

  ngOnInit() {
  }
SignUp(userName:string,passWord:string,fistName:string,lastName:string,email:string,confirmEmail:string,confirmPW:string){
//we are going to compare password sore in our servi
if ( email === confirmEmail && passWord.length > 3){
if (passWord === confirmPW)
if(this.dService.checkIfUserExists(userName)){
  alert ('User Name already Exists');

}else

let addThisName: User={
 userName: userName,
 firstNam: firsName,
 lastName:lastName,
 eami:email,
 passWord: passWord 
};
  this.dService.addUser(userName,passWord);

{
///
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


