import { Pago } from "./Pago"
import { Asegurado } from "./Asegurado";
import { VehiculosAsegurado } from "./VehiculoAsegurado";

export interface Poliza{
    pago:Pago,
    asegurado:Asegurado,
    vehiculosasegurado:VehiculosAsegurado,
    polizadeseguro:{
        id:0,
        numeroDePoliza:null,
        fkVehiculoAsegurado:0,
        fkAsegurado:0,
        fkTipoDeCobertura:37,
        fkPago:0,
        fechaDeInicio:"2022-05-01",
        fechaDeExpiracion:"2023-05-01",
        costoTotal:10000,
        fkEstado:9
    },
    usuario:19
}