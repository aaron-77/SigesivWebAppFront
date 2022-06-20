import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { Router  } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private router :Router) { }

  username:string ="";
  password:string="";
  session={
    id:0,
    nombreCompleto:"",
    idAsegurado:0,
    fkUsuario:0,
    username:"",
    fkRol:0

  }
  ngOnInit(): void {
  }

  login(){
    let user={
      username: this.username,
      password : this.password
    }
    if(this.username != undefined && this.username != "" && this.password != undefined && this.password!=""){
      
      this.loginService.loginService(user).subscribe((res:any)=>{
        this.session = res.data;
        if(this.session != null){
          localStorage.setItem("id",this.session.id.toString());
          localStorage.setItem("nombreCompleto",this.session.nombreCompleto);
          localStorage.setItem("fkUsuario",this.session.fkUsuario.toString());
          localStorage.setItem("username",this.session.username);
          localStorage.setItem("fkRol",this.session.fkRol.toString());
          this.router.navigateByUrl('/menu');
        }
      });
    }else{
      Swal.fire("Debes llenar todos los campos","datos invalidos","warning");
    }
  }
}
