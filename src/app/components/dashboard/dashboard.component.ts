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
    this.service.get().then(result => result.forEach(invitado => {
      this.invitados.push({id: invitado.id, data: invitado.data()});
    }))
  }

  confirmGift(data: any){
    this.service.updateDocument(data).then((x: any)=> console.log('updated sucessfull'));
  }

  totalRegalosFunc(): number{
    let amount = 0;
    this.invitados.forEach(x => {
      amount = Number(amount) + Number(x.data.regalo);
    })
    return amount;
  }

}
