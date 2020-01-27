import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
    private products: Product[]=[
      {
        id: '1',
        productName: 'Ninja Stars',
        productNameURL: 'NinjaStars',
        productDescription: 'Something to do with Ninja Stars',
        additionalInfo: 'They can cause a paper cut',
        price: '$1.00'
      },
      {
        id: '2',
        productName: 'Ninja Starzzzz',
        productNameURL: 'NinjaStars',
        productDescription: 'Something to do with Ninja Stars',
        additionalInfo: 'They can cause a paper cut',
        price: 'Free'
      },
      {
        id: '3',
        productName: 'Ninja Starszzzzzzzzzzz',
        productNameURL: 'NinjaStars',
        productDescription: 'Something to do with Ninja Stars',
        additionalInfo: 'They can cause a paper cut',
        price: '$1111.00'
      },
      {
        id: '4',
        productName: 'Ninja Starszzzzzzzzzzzzzzzz',
        productNameURL: 'NinjaStars',
        productDescription: 'Something to do with Ninja Stars',
        additionalInfo: 'They can cause a paper cut',
        price: '$111.00'
      },
      {
        id: '5',
        productName: 'Ninja ',
        productNameURL: 'NinjaStars',
        productDescription: 'Something to do with Ninja Stars',
        additionalInfo: 'They can cause a paper cut',
        price: '$11.00'
      }
    ];

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
