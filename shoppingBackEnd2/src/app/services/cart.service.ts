import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] =[];
 public $cartItems = new BehaviorSubject<IProduct[]>(this.cartItems);
cartTotal = 0;
$cartTotal = new BehaviorSubject<number>(this.cartTotal);
  constructor() { }
  addItemsToCart(item:IProduct){
    let cartItem = this.cartItems.find(x=> x.id === item.id);
    if (cartItem){
      cartItem.quantity++;
    }else{
        item.quantity = 1;
        this.cartItems.push(item);
    }
        console.log(this.cartItems);
      
      
    
   
    console.log(this.cartItems);
    this.$cartItems.next(this.cartItems);
    this.cartTotal += +item.price;
    this.$cartItems.next(this.cartItems);
    
    this.$cartTotal.next(this.cartTotal);
  }
}
