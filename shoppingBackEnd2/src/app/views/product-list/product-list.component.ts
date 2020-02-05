import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: IProduct[];

  constructor(private dService:DataService, private CartService: CartService) { }

  ngOnInit() {
    this.productList = this.dService.getProducts();
    console.log(this.productList);
  }
addToCart(item){
this.CartService.addItemsToCart(item);
}
}
