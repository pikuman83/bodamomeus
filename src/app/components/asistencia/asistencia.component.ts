import { Component, OnInit } from '@angular/core';

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
    'L siento para esta fecha tengo planes de ir al parque',
    'Estaba a punto de confirmar la asistencia cuando me di cuenta que este día tengo que acompañar a mi abuela a la pelu',
    'Era el dia 21? lo siento prometí a mi vecino que le cuidaria el gato este día'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
