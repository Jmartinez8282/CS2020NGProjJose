import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userList: User[] = [];
  constructor() { }
  checkCred(userName: string,passWord: string):boolean{
let result = false;
if(userName === this.userList[0].userName){
if(passWord === this.userList[0].passWord){
  result = true;
}
}
    return result;
  }
checkIfUserExists(userName:string):boolean{
///going to search for username
let result = false;

if (this.userList.find(x => userName.toLowerCase() === x.userName) !== undefined){
result = true;

}
return result;

}

addUser(userAccount:User){
  // const userAccount: User = {
    // userName:uN.toLowerCase(),
    // passWord:pW

  // };
   this.userList.push(userAccount);
  localStorage.setItem('user',JSON.stringify(this.userList));
   console.log(userAccount);
}



setUserList(){
  if(JSON.parse(localStorage.getItem('user')))
  this.userList = JSON.parse(localStorage.getItem('user'));
}
}
