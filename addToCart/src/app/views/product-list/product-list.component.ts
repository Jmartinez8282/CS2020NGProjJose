import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/interface/iproducts';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products: Iproducts[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.products = this.dService.getProducts();
  }
  addToCart(p: Iproducts){
    this.dService.addToCart(p);
  }

}
