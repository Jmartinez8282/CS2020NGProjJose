import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '50.00',
      quantity:0
    },
    {
      id: '2',
      pName: 'Ninja Starzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '50.00',
      quantity:0
    },
    {
      id: '3',
      pName: 'Ninja Starszzzzzzzzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '50.00',
      quantity:0
    },
    {
      id: '4',
      pName: 'Ninja Starszzzzzzzzzzzzzzzz',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '50.00',
      quantity:0
    },
    {
      id: '5',
      pName: 'Ninja ',
      pNameURL: 'NinjaStars',
      pDesc: 'Something to do with Ninja Stars',
      additionalInfo: 'They can cause a paper cut',
      price: '50.00',
      quantity:0
    }
  ];

  constructor() { }
  getProducts():IProduct []{
  
    return this.products;
  }
  getProduct(sku: string):Observable<IProduct>{
    return of(
    this.products.find(
      x => x.id === sku
    ));
  }
}
