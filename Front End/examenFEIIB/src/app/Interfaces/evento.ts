import {Medicamento} from "./medicamento";

export interface Evento {
  id: string | number,
  nombre: string,
  fecha: string,
  latitud: number,
  longitud:number,
}
