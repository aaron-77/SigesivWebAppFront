import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Poliza } from 'src/app/interfaces/Poliza'; 
import { ComprarPolizaService } from 'src/app/services/comprar-poliza.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-poliza',
  templateUrl: './crear-poliza.component.html',
  styleUrls: ['./crear-poliza.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CrearPolizaComponent implements OnInit {

  constructor(private polizasService:ComprarPolizaService) { }

  user:any={
    username:"usuario",
    fkUsuario:19,
    fkAsegurado:0,
    nombreAsegurado:"aaron hernandez lara",
    rol:1

  }
  polizaCompleta:any={
    pago:{
      id:0,
      fkAsegurado:0,
      numDeTarjeta:null
  },
  asegurado:{
      id:0,
      fkUsuario:0,
      nombreCompleto:"",
      fechaDeNacimiento:null,
      numeroDeLicencia:"",
      celular:""
  },
  vehiculosasegurado:{
      id:0,
      numeroDeSerie:"",
      fkMarca:0,
      fkModelo:0,
      ano:null,
      color:"",
      numeroDePlacas:"",
      fkEstado:0
  },
  polizadeseguro:{
      id:0,
      numeroDePoliza:null,
      fkVehiculoAsegurado:0,
      fkAsegurado:0,
      fkTipoDeCobertura:0,
      fkPago:0,
      fechaDeInicio:"",
      fechaDeExpiracion:"",
      costoTotal:0,
      fkEstado:0
  },
  usuario:19
  }
  tipoDePolizaSeleccionada :any={}
  cobeturasDePolizaSeleccionada:any =[];
  fechaInicio!:string;
  fechaDeExpiracion!:string;
  marcasDeAuto!:any[];
  modelosDeMarcaSeleccionada!:any[];
  tiposDeCobertura:any={
    catalogosTiposDeCobertura:[],
    catalogoMarcasDeAuto:[]
  }
  tiposDeCoberturaCopy :any={
    catalogosTiposDeCobertura:[],
    catalogoMarcasDeAuto:[]
  }
  lapsoDeCoberturaSeleccionado!:string;
  
  idPolizaSeleccionado:number=0;
  
  ngOnInit(): void {
    this.polizasService.getCoberturasYmarcas().subscribe((res:any)=>{
      this.tiposDeCobertura = res.data;
      console.log(this.tiposDeCoberturaCopy);      
      this.polizaCompleta.asegurado.fkUsuario = this.user.fkUsuario;

    });
   
   
  }

  comprarPoliza(formulario:NgForm,poliza:any){
    if(formulario.valid){
      this.polizasService.comprarPoliza(poliza)!.subscribe((res:any) =>{
        if(res.status = 1){
          Swal.fire("Tu compra se realizo con exito","compra exitosa","success");
        }else{
          Swal.fire("Lo sentimos no se pudo realizar tu compra","error al comprar","error");
        }
        
      });
    }else{
      Swal.fire("Tienes que llenar todos los campos","Datos incompletos","warning")
      console.log("llena todos los campos requeridos");
    }
    
  }
  obtenerTipoDePoliza(tipo:any){
    
    /* this.tipoDePolizaSeleccionada= tipo;
    console.log(this.tipoDePolizaSeleccionada.lapsoDeCobertura); */
    this.tipoDePolizaSeleccionada = tipo;
    
    console.log(this.tipoDePolizaSeleccionada);
    this.lapsoDeCoberturaSeleccionado = this.tipoDePolizaSeleccionada.lapsoDeCobertura.toString();
    this.lapsoDeCoberturaSeleccionado = this.lapsoDeCoberturaSeleccionado + ((parseInt(this.lapsoDeCoberturaSeleccionado))>=2?" años":" año");
    this.polizaCompleta.polizadeseguro.fkTipoDeCobertura = this.tipoDePolizaSeleccionada.id;
    this.polizaCompleta.polizadeseguro.costoTotal = this.tipoDePolizaSeleccionada.costo;
    
    console.log(this.tipoDePolizaSeleccionada);
    this.calcularFechasDePoliza();
    this.obtenerCoberturasDePolizaSeleccionada();
    console.log(this.polizaCompleta);
    
  }
  calcularFechasDePoliza(){
    let fechaBaseInicio =new Date();
    let fechaBaseExpiracion =new Date(); 
    fechaBaseExpiracion.setFullYear(fechaBaseInicio.getFullYear()+this.tipoDePolizaSeleccionada.lapsoDeCobertura);
    this.fechaInicio=fechaBaseInicio.toISOString().split('T')[0] ;
    this.fechaDeExpiracion = fechaBaseExpiracion.toISOString().split('T')[0] ;
    this.polizaCompleta.polizadeseguro.fechaDeInicio = this.fechaInicio;
    this.polizaCompleta.polizadeseguro.fechaDeExpiracion = this.fechaDeExpiracion;
    console.log(this.fechaInicio);
    console.log(this.fechaDeExpiracion);
  }
  obtenerCoberturasDePolizaSeleccionada(){
    this.cobeturasDePolizaSeleccionada= this.tipoDePolizaSeleccionada.casosDeCobertura;
  }
  obtenerMarcaSeleccionada(marcaSeleccionada:any){
    this.polizaCompleta.vehiculosasegurado.fkMarca = marcaSeleccionada.id;
    this.obtenerModelosDeMarca(marcaSeleccionada);
  }
  obtenerModelosDeMarca(marca:any){
    console.log(marca);
    this.modelosDeMarcaSeleccionada = marca.modelos;
    //console.log(this.modelosDeMarcaSeleccionada);
  }
  obtenerModeloSeleccionado(modelo:any){
    this.polizaCompleta.vehiculosasegurado.fkModelo = modelo.id;
  }
  
}
