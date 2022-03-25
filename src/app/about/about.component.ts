import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  facilities = [
    {
      url: "https://jungleworks.com/wp-content/uploads/2018/08/HOME-SERVICESNo-Mess-No-Stress-23-1.png",
      facName: "Fast delivery in 1 hour"
    },
    {
      url: "https://t4.ftcdn.net/jpg/02/76/03/67/360_F_276036749_G1khwlIPyVnd9O07KbPkPyG7eEStcldi.jpg",
      facName: "200+ delivery man"
    },
    {
      url: "https://i.pinimg.com/originals/00/3e/76/003e7642fbcb9dd52ccbb88652b52b87.jpg",
      facName: "300+ Restaurant and Cafe"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
