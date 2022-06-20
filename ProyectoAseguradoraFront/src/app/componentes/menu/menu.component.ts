import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  
    conductor=false;
    ejecutivo=false;
  session:any={
    id:0,
    nombreCompleto:"",
    fkUsuario:0,
    username:"",
    fkRol:0
  }
  
  ngOnInit(): void {
    this.session.id= localStorage.getItem('id')
    this.session.nombreCompleto= localStorage.getItem('nombreCompleto');
    this.session.fkUsuario = localStorage.getItem('fkUsuario');
    this.session.username = localStorage.getItem('username')
    this.session.fkRol = localStorage.getItem('fkRol');
    if(parseInt(this.session.fkRol) == 1){
      this.conductor=true;
    }
    if(parseInt(this.session.fkRol)==27){
      this.ejecutivo=true;
    }
  }

}
