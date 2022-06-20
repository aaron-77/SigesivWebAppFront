import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }
  urlPolizasDelConductor = "https://localhost:5001/Polizas/obtenerPolizas";
  urlObtenerTiposDePolizasYMarcas ="https://localhost:5001/Polizas/comprarPoliza";

  obtenerPolizasDelConductor(idConductor:number){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json'
    });
    let parametros:HttpParams = new HttpParams();
    parametros.set('idConductor',idConductor);
    return this.http.get(this.urlPolizasDelConductor+`?idConductor=${idConductor}`,{headers:httpHeaders,params:parametros})
  }
}
