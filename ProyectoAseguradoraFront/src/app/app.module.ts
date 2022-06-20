import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPolizaComponent } from './componentes/crear-poliza/crear-poliza.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CrearReporteComponent } from './componentes/crear-reporte/crear-reporte.component';
import { CrearReporteMapComponent } from './componentes/crear-reporte-map/crear-reporte-map.component';
import { AsignarAjustadorComponent } from './componentes/asignar-ajustador/asignar-ajustador.component';
import { DetallePolizaComponent } from './componentes/detalle-poliza/detalle-poliza.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListadoPolizasComponent } from './componentes/listado-polizas/listado-polizas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPolizaComponent,
    MenuComponent,
    CrearReporteComponent,
    CrearReporteMapComponent,
    AsignarAjustadorComponent,
    DetallePolizaComponent,
    LoginComponent,
    ListadoPolizasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
