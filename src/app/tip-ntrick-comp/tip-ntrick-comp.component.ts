import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tip-ntrick-comp',
  templateUrl: './tip-ntrick-comp.component.html',
  styleUrls: ['./tip-ntrick-comp.component.sass']
})
export class TipNtrickCompComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    items : 4,
    margin: 20,
    stagePadding: 10,
    navSpeed: 700,
    navText: ['<','>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
