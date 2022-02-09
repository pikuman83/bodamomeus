import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { Data } from '../../interfaces'

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  excusas = [
    'Me han regalado un vuelo a caribe solo para esta fecha',
    'Estoy en la carcel',
    'Tengo que cuidar a mis bisabuelos este día',
    'Mi jefa me acaba de decir que tengo que ir urgente a canarias, lo siento, no puedo decrile no, pero te enviaré tu regalo por correos',
    'Lo siento para esta fecha tengo planes de ir al parque',
    'Estaba a punto de confirmar la asistencia cuando me di cuenta que este día tengo que acompañar a mi abuela a la pelu',
    'Era el dia 21? lo siento prometí a mi vecino que le cuidaria el gato este día'
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

  constructor(private service: GlobalService) {
    service.invitado1.subscribe(inv => this.invitado1.nombre = inv!);
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
          alert('Notificación enviada')
        })
      }
      else {
        alert('Notificación enviada')
      }
      // hide form?? create a nice notification?
    })
  }

}
