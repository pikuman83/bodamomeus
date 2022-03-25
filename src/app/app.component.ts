import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
export class abc {
  public readonly x: string;
  public readonly y: string;
  constructor(x: string, y: string){
    this.x = x;
    this.y = y
  }
  getabc(x: string){
    return x
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bodaMomeus';

  ngOnInit(): void {
    const abc1 = new abc('hello', 'hello1');
    console.log(abc,...Object.values(abc))
  }

  
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
