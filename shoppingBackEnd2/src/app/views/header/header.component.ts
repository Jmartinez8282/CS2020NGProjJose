import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
cartCount = 0;
cartItems: IProduct [] = [];
showList = false;
cartTotal = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      this.cartCount = items.length;
      this.cartItems = items;
      
    });
    this.cartService.$cartTotal.subscribe( total => {
      
      this.cartTotal = total;
      
    });
  }
toggleList(){
  this.showList =!this.showList;
}
}
