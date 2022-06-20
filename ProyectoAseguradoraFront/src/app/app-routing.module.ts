import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CrearPolizaComponent } from './componentes/crear-poliza/crear-poliza.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearReporteComponent } from './componentes/crear-reporte/crear-reporte.component';
import { CrearReporteMapComponent } from './componentes/crear-reporte-map/crear-reporte-map.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
