import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {
  
  autoPlay = false;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.autoPlay = true;
    }, 3000);
  }

  abc(e: any){
    const x = e.target as HTMLVideoElement;
    console.log(x)
    x.play();
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
