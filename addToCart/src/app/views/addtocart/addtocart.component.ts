import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/interface/iproducts';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
cartItems: Iproducts [];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getCartItems();
  }
removeCartItems(){
  //Call service to remove items fro cart
  this.dService.emptyCart();
}
removeItem(id:Iproducts){
this.dService.removeItemFromCart(id);
}
}
