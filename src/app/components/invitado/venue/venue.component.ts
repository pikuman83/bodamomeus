import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {
  
  multi = false;
  constructor(private service: GlobalService) {
    service.invitado2.subscribe(x => this.multi = x? true : false)
   }

}
