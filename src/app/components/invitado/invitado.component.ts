import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

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
  constructor(private route: ActivatedRoute, private service: GlobalService) {

   }

  ngOnInit(): void {
    this.getInvitado();
  }

  getInvitado(): void{
    const param = this.route.snapshot.paramMap.get('id')?.split('-') as string[];
    if (param){
      
      this.invitado = {
        gender: param[0],
        name1: param[1],
        name2: param[2]! 
      }

      this.service.invitado1.next(param[1]!);
      this.service.invitado2.next(param[2]!);      
    }
  }

}
