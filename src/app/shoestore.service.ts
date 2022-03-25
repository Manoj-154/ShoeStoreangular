// import { Injectable } from '@angular/core';
// import {Items} from './items'
// @Injectable({
//   providedIn: 'root'
// })
// export class shoestoreService {

//   constructor() { }

//   orderedItem: Items[] = []
//   getOrders():Items[]{
//     return this.orderedItem
//   }
// }

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import {Items} from './items'
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   public cartItemsList : any =[]
//   public productList = new BehaviorSubject<any>([])
//   constructor() { }
//   orderedItem: Items[] = []
//   getOrders():Items[]{
//     return this.orderedItem
//   }

  
// }

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Items} from './items'
@Injectable({
  providedIn: 'root'
})
export class shoestoreService {

  public cartItemsList : any =[]
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  orderedItem: Items[] = []
  getOrders():Items[]{
    return this.orderedItem
  }
}