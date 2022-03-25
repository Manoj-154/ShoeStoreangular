import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {PopularItems} from '../popular-categories-items'
import {shoestoreService} from '../shoestore.service'
@Component({
  selector: 'app-home',
  templateUrl: './menandwomen.component.html',
  styleUrls: ['./menandwomen.component.css']
})
export class MenandwomenComponent implements OnInit {

  populItems = PopularItems
  filteredItems: Items[] = []
  popItems = [
    {
      imgUrl:"",
      names: "Clarks"
    },
    {
      imgUrl:"",
      names: "One8"
    },
    {
      imgUrl:"",
      names: "Lee Cooper"
    },
    {
      imgUrl:"",
      names: "Addidas"
    },
    {
      imgUrl:"",
      names:"seeandwear"
    },
    {
      imgUrl:"",
      names:"Sparx"
    },
    {
      imgUrl:"",
      names:"Jimmy choo"
    },
    {
      imgUrl:"",
      names:"Manalo Blahnik"
    },
    {
      imgUrl:"",
      names:"Givenchy"
    },
    {
      imgUrl:"",
      names:"Mui Mui"
    },
    {
      imgUrl:"",
      names:"Tory Burnch"
    },
    {
      imgUrl:"",
      names:"Prada"
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
