import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-crear-reporte',
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.css']
})
export class CrearReporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user:any={
    username:"usuario",
    fkUsuario:19,
    fkAsegurado:0,
    nombreAsegurado:"aaron hernandez lara",
    rol:1

  }
  polizasDelConductor:any={

  }
  reporte!:any;


  crearReporte(form:Form,reporte:any){

  }

}
