import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Invitado = {
  gender: string,
  name1: string,
  name2?: string
 }

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.css']
})

export class InvitadoComponent implements OnInit {

  invitado!: Invitado;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInvitado();
  }

  getInvitado(): void{
    const param = this.route.snapshot.paramMap.get('invitado')!.split('-') as string[];
    if (param){
      this.invitado = {
        gender: param[0],
        name1: param[1],
        name2: param[2]! 
      }
    }
  }

}
