import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  urlLogin = "https://localhost:5001/Asegurado/obtenerAseguradoConUsername";
  
  
  loginService(userdata:any){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json'
    });
    return this.http.post(this.urlLogin,userdata,{headers:httpHeaders});
  }

  
}
