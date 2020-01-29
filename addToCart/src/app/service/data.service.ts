import { Injectable } from '@angular/core';
import { Iproducts } from '../interface/iproducts';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Iproducts[]=[];

products: Iproducts[]=[
  {
    id: '1',
    pName: 'Ninja Stars',
    pNameURL: 'NinjaStars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: 'free',
    qty:'0'
  },
  {
    id: '2',
    pName: 'Ninja Stars22',
    pNameURL: 'NinjaStars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: '$1.00',
    qty:'0'
  },
  {
    id: '3',
    pName: 'Ninja Stars33',
    pNameURL: 'NinjaStars',
    pDesc: 'Paper Ninja Star',
    additionalInfo: 'May Cause Paper Cuts',
    price: '$2.00',
    qty:'0'
  },
]
  constructor() { }
  getProducts(): Iproducts []{
   
    return this.products
  }
  addToCart(cartItem: Iproducts){
    if(this.itemsInCart.includes(cartItem)){
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
    }
  }
  getCartItems():Iproducts[]{
return this.itemsInCart;
  }
  emptyCart(){
    this.itemsInCart.length = 0;
  }
  removeItemFromCart(itemToRemove: Iproducts){
    //search product and remove from items from cart
    //find the index location of product
    const index = this.findItemInCart(itemToRemove);
  }
  findItemInCart(id:Iproducts): number{
const cartIndex = this.itemsInCart.indexOf(id);
    return;
  }
  itemsToRemove(){

  }
}
