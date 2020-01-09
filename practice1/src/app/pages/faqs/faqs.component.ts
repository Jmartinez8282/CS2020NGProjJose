import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  flip = false;

  constructor() { }

  ngOnInit() {
  }
clickEvent(){
  alert('You clicked me, prepare to die!');
}
switch(v){
  this.flip = !this.flip;
  v.innerText = this.flip ? 'Off' : 'On';
  }
  
  


}
