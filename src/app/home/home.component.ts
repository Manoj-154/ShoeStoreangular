import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {PopularItems} from '../popular-categories-items'
import {shoestoreService} from '../shoestore.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populItems = PopularItems
  filteredItems: Items[] = []
  popItems = [
    {
      imgUrl:"",
      names: "Hush Puppies"
    },
    {
      imgUrl:"",
      names: "One8"
    },
    {
      imgUrl:"",
      names: "Addidas"
    },
    {
      imgUrl:"",
      names: "Givenchy"
    },
    {
      imgUrl:"",
      names:"Reebok"
    },
    {
      imgUrl:"",
      names:"seeandwear"
    },
    {
      imgUrl:"",
      names:"WoodLand"
    }
  ]

  stars=[
    {
      starImg:""
    }
  ]
  constructor(private fs : shoestoreService) { }

  ngOnInit(): void {
  }

  onSelect(item: any):void{
    this.filteredItems = this.populItems.filter(i => i.type == item.names)
  }

  add(item:any){
    this.fs.orderedItem.push(item)
  }
}
