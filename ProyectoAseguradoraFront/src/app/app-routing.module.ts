import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrearPolizaComponent } from './componentes/crear-poliza/crear-poliza.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearReporteComponent } from './componentes/crear-reporte/crear-reporte.component';
import { CrearReporteMapComponent } from './componentes/crear-reporte-map/crear-reporte-map.component';
import { ListadoPolizasComponent } from './componentes/listado-polizas/listado-polizas.component';
import { AsignarAjustadorComponent } from './componentes/asignar-ajustador/asignar-ajustador.component';
import { LoginComponent } from './componentes/login/login.component';
const routes: Routes = [
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'crearPoliza',
    component:CrearPolizaComponent
  },
  {
    path:'crearReporteUbicacion',
    component:CrearReporteMapComponent
  }
  ,{
    path:"crearReporte",
    component:CrearReporteComponent
  },
  {
    path:"listadoPolizas",
    component:ListadoPolizasComponent
  },
  {
    path:"asignarAjustador",
    component:AsignarAjustadorComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
