import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {PopularItems} from '../popular-categories-items'
import {shoestoreService} from '../shoestore.service'
@Component({
  selector: 'app-home',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  populItems = PopularItems
  filteredItems: Items[] = []
  popItems = [
    
    {
      imgUrl:"",
      names:"Fila"
    },
        
    {
      imgUrl:"",
      names:"Sparxkid"
    },
    {
      imgUrl:"",
      names: "One8Kid"
    },
    {
      imgUrl:"",
      names: "Puma"
    },
    {
      imgUrl:"",
      names: "Addidas"
    },
    {
      imgUrl:"",
      names: "Nikekid"
    },


    {
      imgUrl:"",
      names:"Hush Puppies"
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
