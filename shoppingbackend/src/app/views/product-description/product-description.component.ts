import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
product: Product;
  constructor(private dService:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    //we are going to grab the id number
    const id = this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }
getProduct(sku: string){
  console.log(sku);
  this.dService.getItems(sku).subscribe(
    x => this.product = x

  );

}
}
