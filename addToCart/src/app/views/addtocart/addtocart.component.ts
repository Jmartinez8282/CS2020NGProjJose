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
    this.cartItems = this.dService.getProducts();
  }
removeCartItems(id:Iproducts){
  const index  = this.findIteminCart(itemToRemove);
  this.itemsInCart.splice(index,1);
  
}
removeItem(id:Iproducts){
this.dService.removeItemFromCart(id);
}
}
