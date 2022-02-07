import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bodaMomeus';

  // @ViewChild('videoEl') el!: ElementRef<any>;
  
  // isElementInView(element: any) {
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
