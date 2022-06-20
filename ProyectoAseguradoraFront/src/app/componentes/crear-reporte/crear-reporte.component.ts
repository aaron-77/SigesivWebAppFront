import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ReportesService } from 'src/app/services/reportes.service';
@Component({
  selector: 'app-crear-reporte',
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.css']
})
export class CrearReporteComponent implements OnInit {

  constructor(private reportesService :ReportesService) { }

  user:any={
    username:"usuario",
    fkUsuario:19,
    fkAsegurado:5,
    nombreAsegurado:"aaron hernandez lara",
    rol:1
  }
  polizasDelConductor:any={
  }
  reporte!:any;
  ngOnInit(): void {
    this.obtenerPolizasDeConductor(this.user.fkAsegurado);
  }

  crearReporte(form:Form,reporte:any){

  }
  obtenerPolizasDeConductor(idConductor:number){
    this.reportesService.obtenerPolizasDelConductor(idConductor).subscribe(polizas =>{
      this.polizasDelConductor = polizas;
      console.log(this.polizasDelConductor);
    })
  }

}
