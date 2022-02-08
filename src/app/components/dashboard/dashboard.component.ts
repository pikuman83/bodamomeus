import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  invitados: any[] = [];
  constructor(private service: GlobalService) { }

  ngOnInit(): void {
    this.getInvitados();
  }

  getInvitados(){
    this.service.get().then(x => x.forEach(y => {
      console.log(y.data())
      this.invitados.push(y.data());
    }))
  }

}
