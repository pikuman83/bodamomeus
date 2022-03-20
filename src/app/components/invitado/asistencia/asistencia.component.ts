import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';
import { Data } from '../../../interfaces'

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  excusas = [
    'Tinc previst ser positiu de Covid el dia 21/5 i no podré venir',
    'Sóc a la garjola',
    'No puc deixar a les alpaques soles a la granja un dissabte',
    'Haig de quedar-me cuidant els besavis, nets, nebots o persones dependents en general',
    'Estic enamorat/da de la Miluska/Ricard i no suportaría veure’ls casar-se',
    'M’arriba una comanda d’Amazon i haig de ser a casa per obrir-li la porta al repartidor',
  ];

  excusa = this.excusas[0];
  invitado1: Data = {
    nombre: '',
    asiste: 'Sí',
    comentarios: '',
    plato: 'vegetariano'
  }
  
  invitado2: Data = {
    nombre: '',
    asiste: 'Sí',
    comentarios: '',
    plato: 'vegetariano'
  }

  constructor(private service: GlobalService, private router: Router) {
    service.invitado1.subscribe(inv => this.invitado1.nombre = inv);
    service.invitado2.subscribe(inv2 => this.invitado2.nombre = inv2? inv2 : '')
   }

  ngOnInit(): void {
  }

  getExcuse(): void{
    this.excusa = this.excusas[Math.floor(Math.random() * this.excusas.length)];
  }

  addOrPatch(){
    this.service.create('bodaMomeus', this.invitado1).then(x => {
      if(this.invitado2.nombre){
        this.invitado2.comentarios = this.invitado1.comentarios;
        this.service.create('bodaMomeus', this.invitado2).then(y => {
          alert('Muchas gracias, nos vemos pronto')
        })
      }
      else {
        alert('Muchas gracias, nos vemos pronto')
      }
      this.router.navigateByUrl("/")
    })
  }

}
