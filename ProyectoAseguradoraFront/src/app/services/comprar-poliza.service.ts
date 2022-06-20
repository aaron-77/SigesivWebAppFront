import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ComprarPolizaService {
  urlCompraDePoliza = "https://localhost:44316/Polizas/comprarPoliza";
  urlObtenerTiposDePolizasYMarcas ="https://localhost:44316/Polizas/comprarPoliza";
 
  constructor(private http: HttpClient) { 

  
  }
  getCoberturasYmarcas(){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json'
    });
    console.log("service");
    return this.http.get(this.urlObtenerTiposDePolizasYMarcas,{headers:httpHeaders});
 }
 comprarPoliza(polizaCompleta:any){
  try {
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json'
    });
    console.log("service");
    return this.http.post(this.urlCompraDePoliza,polizaCompleta,{headers:httpHeaders});  
  } catch (error) {
    console.log(error);
  }
  return null;
}
 
}

