import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  invitados: any[] = [];
  amount!: number;
  icons = [
    '/assets/wedding-car.png',
    '/assets/honeymoon1.png',
    '/assets/honeymoon2.png',
    '/assets/honeymoon3.png',
    '/assets/honeymoon4.png',
    '/assets/honeymoon5.png',
  ]

  constructor(private service: GlobalService) { }

  ngOnInit(): void {
    this.getInvitados();
  }

  getInvitados(){
    this.service.get().then(result => result.forEach(invitado => {
      this.invitados.push({id: invitado.id, data: invitado.data()});
    }))
  }

  setAmount(amnt: string){
    this.amount = Number(amnt);
  }
  confirmGift(data: any){
    if(this.amount){
      data.data.regalo = this.amount;
      data.data.icon = this.icons[this.randomIndex()]
      this.service.updateDocument(data);
    }
  }

  totalRegalosFunc(): number{
    let amount: number = 0;
    this.invitados.forEach(x => {
      if (x.data.regalo)
      amount += Number(x.data.regalo);
    })
    return amount;
  }

  randomIndex(): number {
    return Math.floor(Math.random() * this.icons.length);
  }

}
