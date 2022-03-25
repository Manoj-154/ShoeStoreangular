import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import {shoestoreService} from '../shoestore.service'
import { Items } from '../items';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  cartItems: Items[] = []
  constructor(private fs:shoestoreService) { }

  ngOnInit(): void {
    this.cartItems = this.fs.getOrders()
     console.log(this.cartItems)
    
  }
  delete(id:number){
    this.cartItems = this.cartItems.filter((v, j) => j !== id);
  }
}