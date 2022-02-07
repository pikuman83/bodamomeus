import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  constructor() { }
  autoPlay = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.autoPlay = true;
    }, 4000);
  }

  // isElementInView(){
  //   const element = document.getElementsByTagName('video')[0];
  //   const pageTop = window.scrollX;
  //   console.log(element,pageTop)
  //   const pageBottom = pageTop + window.innerHeight;
  //   console.log('pagebottom',pageBottom)
  //   const elementTop = element.offsetTop;
  //   console.log(elementTop)
  //   const elementBottom = elementTop + element.offsetHeight;
  //   console.log(elementBottom)
  //   console.log(((elementTop <= pageBottom) && (elementBottom >= pageTop)))
  //   return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  // }

}
