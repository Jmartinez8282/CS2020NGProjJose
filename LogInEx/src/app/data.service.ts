import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
userList: User[] = [
  {
    userName:'jateen',
    passWord:'JaTeam'
  }
];
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
}
