import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  product: Product[];
 
    

  constructor() { }
  getProducts():Product[]{
    return this.product;
  }

  getItems(id: string):Observable<Product>{
    return of (
    (this.product.find(
      product => product.id === id
    )
    ));
  }
}
