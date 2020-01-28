import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
    6

  constructor() { }
  getProducts():Product[]{
    return this.products;
  }

  getItems(id: string):Observable<Product>{
    return of (
    (this.products.find(
      product => product.id === id
    )
    ));
  }
}
